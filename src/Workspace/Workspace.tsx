import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import WeinDis from './ProblemDescription/WeinDis';


type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
    return  <Split className="split"  minSize={0}>
        <WeinDis/>

        <Playground/>
        
    </Split>

};
export default Workspace;