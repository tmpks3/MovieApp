import React from "react";

function Food() {
  return <h1>I love potato</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
