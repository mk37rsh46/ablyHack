import { useChannel } from "ably/react";
import { useEffect, useState } from "react";
import { EmojiUsage, Message } from "../utils/messageData";
import { ArrowPathIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
const EmojiReactions = () => {
  const channelName = `fpods`;
  const clientId = 'sdfjios'
  const emojis = ["😀", "❤️", "👋", "😹", "😡", "👏"];
  let usedEmojiCollection: EmojiUsage[] = [];

  const ADD_REACTION_EVENT = "add-reaction";
  const REMOVE_REACTION_EVENT = "remove-reaction";
  const SEND_EVENT = "send";

  const [addEmoji, setAddEmoji] = useState(true);

  const [chatMessage, setChatMessage] = useState<Message>({});
  const [showEmojiList, setShowEmojiList] = useState(false);

  const { channel } = useChannel(
    channelName,
    (msg: {
      name: string;
      data: { author: any; content: any; body: string };
      id: any;
      timestamp: string | number | Date;
      clientId: string;
    }) => {
      switch (msg.name) {
        case SEND_EVENT:
          usedEmojiCollection = [];

          break;
        case REMOVE_REACTION_EVENT:
          const msgReactions = updateEmojiCollection(
            msg.data.body,
            msg.clientId,
            msg.name,
          );
          setChatMessage((chatMessage) => ({
            ...chatMessage,
            reactions: msgReactions,
          }));
          break;
      }
    },
  );

  const sendMessageReaction = (
    emoji: string,
    reactionEvent: string,
  ) => {
    channel.publish(reactionEvent, {
      body: emoji,
      extras: {
        reference: { type: "com.ably.reaction" },
      },
    });
    setShowEmojiList(false);
  };

  const getMessageReactions = () => {
    channel.subscribe(
      {
        name: ADD_REACTION_EVENT,
      },
      (reaction: {
        data: { body: string };
        clientId: string;
        name: string;
      }) => {
        const msgReactions = updateEmojiCollection(
          reaction.data.body,
          reaction.clientId,
          reaction.name,
        );
        setChatMessage((chatMessage) => ({
          ...chatMessage,
          reactions: msgReactions,
        }));
      },
    );
  };

  const handleEmojiCount = (emoji: string) => {
    const emojiEvent =  REMOVE_REACTION_EVENT;
    sendMessageReaction(emoji, emojiEvent);
  };

  const updateEmojiCollection = (
    emoji: string,
    clientId: string,
    reactionEvent: string,
  ) => {
    const userReactions = usedEmojiCollection.find(
      (emj) => emj.emoji === emoji,
    );
    switch (reactionEvent) {

      case ADD_REACTION_EVENT:
        if (userReactions) {
          if (!userReactions.usedBy.includes(clientId)) {
            userReactions.usedBy.push(clientId);
          }
        } else {
          const emojiUse: EmojiUsage = { usedBy: [clientId], emoji: emoji };
          usedEmojiCollection.push(emojiUse);

        }
        break;
      case REMOVE_REACTION_EVENT:

        if (userReactions && userReactions.usedBy.includes(clientId)) {
          userReactions.usedBy.splice(
            userReactions.usedBy.indexOf(clientId),
            1,
          );
          
          usedEmojiCollection[usedEmojiCollection.indexOf(userReactions)] =
            userReactions;
        }
        break;
    }
    return usedEmojiCollection;
  };




  useEffect(() => {
    getMessageReactions();

  }, []);

  return (
    <div className="flex items-center">

              {chatMessage.reactions?.length ? (
                <ul className="flex flex-row flex-wrap">
                  {chatMessage.reactions?.map((reaction) =>
                    reaction.usedBy.length ? (
                      <li
                        key={reaction.emoji}
                        className={`text-xs p-2 m-1 space-x-2  cursor-pointer ${
                          reaction.usedBy.includes(clientId)
                            ? " hover:bg-blue-100"
                            : "hover:bg-slate-100"
                        }`}
                        onClick={() =>
                          handleEmojiCount(
                            reaction.emoji,
                          )
                        }
                      >
                        <div className="text-base flex items-center">
         {reaction.emoji} 
                        &nbsp; {reaction.usedBy.length}
                        </div>
                      </li>
                    ) : null,
                  )}
                </ul>
              ) : null}

              <div className="mt-1">
                <div className=" rounded-full p-1 ml-1 cursor-pointer hover:bg-slate-100">
                  <FaceSmileIcon
                    className="h-7 w-7 text-slate-500"
                    onClick={() => setShowEmojiList(!showEmojiList)}
                  />
                </div>
                {showEmojiList ? (
                  <ul className="bg-slate-100 rounded-full w-fit flex flex-row p-2 space-x-2 mt-2 absolute">
                    {emojis.map((emoji) => (
                      <li
                        key={emoji}
                        className="text-lg px-1 cursor-pointer transition delay-5 ease-in-out hover:-translate-y-1 motion-reduce:transition-none"
                        onClick={() =>
                          sendMessageReaction(
                            emoji,
                            ADD_REACTION_EVENT,
                          )
                        }
                      >
                        <div>{emoji}</div>
                      </li>
                    ))}
                  </ul>
                ) : null}

      </div>
    </div>
  );
};


export default EmojiReactions;
