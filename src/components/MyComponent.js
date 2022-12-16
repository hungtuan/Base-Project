//class Component
//funtion Component
import React from "react";
class MyComponent extends React.Component {
  state = { name: "Eric", address: "Hoi dan IT", age: 22 };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
