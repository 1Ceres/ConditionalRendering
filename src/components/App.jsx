import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = true;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello World</h1> : <Login />} */}
      {currentTime > 11 ? <h1> Why are you still at home? </h1> : null}
    </div>
  );
}

export default App;
