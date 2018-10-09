import React from "react";
import ReactDOM from "react-dom";


const App = () =>{
    return (
        <div className="newElement">
            <h1> Hello World! </h1>
            <h2> Hello React! </h2>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));