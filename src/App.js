import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./actions/index.js";

const App = props => {
  return (
    <div>
      Hi<button onClick={props.fetchCurrentUser()}>Open app</button>
    </div>
  );
};
const mapStateToProps = state => {
  return { user: state.user };
};
const mapDispatchToProps = dispatch => {
  return { fetchCurrentUser: fetchCurrentUser };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

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
