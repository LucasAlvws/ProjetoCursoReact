import React, {Component} from "react";


class MyClass extends Component{
    
    click(){
        alert("Tetse");
    }

    render(){
        return(
            <div>
                <h1>My email is: {this.props.email}</h1>
                <button onClick={this.click}>Click</button>
            </div>
        );
    }
}

export default MyClass;