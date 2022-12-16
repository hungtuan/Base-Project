//class Component
//funtion Component
import React from "react";
class MyComponent extends React.Component {
  state = { name: "Eric", address: "Hoi dan IT", age: 22 };

  // handleClick = (event) => {
  //   console.log("Click me my button");
  //   // console.log("Random", Math.floor(Math.random() * 100 + 1));
  //   this.setState({ name: "Tuan", age: Math.floor(Math.random() * 100 + 1) });
  // };
  // handOnMoverOver(event) {
  //   // console.log(event.pageX);
  // }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOneSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <form onSubmit={(event) => this.handleOneSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
