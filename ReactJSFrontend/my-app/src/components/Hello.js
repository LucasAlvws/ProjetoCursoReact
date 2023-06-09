import React from "react"; 

function Hello(props){
    function click() {
        alert("teste");
    }
    return(
        <div>
            <h1 className="nome">My name is: {props.name}</h1>
            <button onClick={click}>Click</button>
        </div>
    );
}
export default Hello;
