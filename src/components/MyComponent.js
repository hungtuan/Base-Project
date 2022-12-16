//class Component
//funtion Component
import React from "react";
class MyComponent extends React.Component {
  state = { name: "Eric", address: "Hoi dan IT", age: 22 };

  handleClick = (event) => {
    console.log("Click me my button");
    // console.log("Random", Math.floor(Math.random() * 100 + 1));
    this.setState({ name: "Tuan", age: Math.floor(Math.random() * 100 + 1) });
  };
  handOnMoverOver(event) {
    // console.log(event.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handOnMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
export default MyComponent;
