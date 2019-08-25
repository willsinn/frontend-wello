import React, { useState, useEffect } from "react";
import WorkspaceItemsContainer from "./WorkspaceItemsContainer";
import HomeBtn from "../components/HomeBtn";
import { connect } from "react-redux";
import { deleteProjectWorkspace } from "../actions/projects";
import { clearWorkspace } from "../actions/workspace";
import Mountians from "../images/mountianrange.jpg";
import Lake from "../images/lake.jpg";
import Beach from "../images/beach.jpg";

const ProjectWorkspace = (props, { dispatch }) => {
  const [index, setIndex] = useState(null);
  const bgs = [Mountians, Lake, Beach];

  useEffect(() => {
    const count = props.bgCounter;
    const allBGS = bgs.length;
    const trimCount = count % allBGS;
    if (count === allBGS) {
      setIndex(0);
    } else if (count > allBGS) {
      setIndex(trimCount);
    } else {
      setIndex(count);
    }
  }, []);
  const handleDelete = e => {
    props.dispatch(deleteProjectWorkspace(props.workspace));
    props.dispatch(clearWorkspace());
  };
  return (
    <div id="workspace" style={{ backgroundImage: `url('${bgs[index]}')` }}>
      <div className="project-workspace-control">
        <div className="pwc-left">
          <div className="pwc-title-top">{props.workspace.title}</div>
          <div className="pwc-title-bottom">
            <button className="pwc-btn">EDIT</button>
            <button onClick={e => handleDelete(e)} className="pwc-btn">
              DELETE
            </button>
          </div>
        </div>
        <div className="pwc-right">
          <div className="pwc-nav">
            <HomeBtn />
          </div>
          <div className="pwc-desc">
            About this board <button className="pwc-btn"> + </button>
          </div>
        </div>
      </div>
      <WorkspaceItemsContainer workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user,
  bgCounter: user.bgCounter
});
export default connect(mapStateToProps)(ProjectWorkspace);
