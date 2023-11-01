interface EmojiUsage {
    emoji: string;
    usedBy: string[];
  }
  interface Message {
  
    reactions?: EmojiUsage[];
  }
  
  
  
  
  export type { Message, EmojiUsage };
  