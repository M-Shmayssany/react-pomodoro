import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import SayHello from "./SayHello";

ReactDOM.render(    
    <div>
        <SayHello name={"everyone"} />
        <Counter />
    </div>,
  document.getElementById("main")
);
