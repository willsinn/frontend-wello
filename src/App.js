import React from "react";
import NavBar from "./containers/NavBar";
import "./App.css";
import UserProjectsContainer from "./containers/UserProjectsContainer";
import ProjectWorkspace from "./containers/ProjectWorkspace";
import { connect } from "react-redux";

const App = props => {
  console.log(props.workspace);
  return (
    <>
      <NavBar />
      {props.workspace.id !== undefined ? (
        <ProjectWorkspace workspace={props.workspace} />
      ) : (
        <UserProjectsContainer />
      )}
    </>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});
export default connect(mapStateToProps)(App);

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
