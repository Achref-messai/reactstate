import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    person: {
      fullName: "Mark Zuckerberg",
      bio: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
      imgPub: "/photo.jpg",
      profession: "Chief Executive Officer of Facebook    ",
    },
    hidden: false,
    counter: 0,
  };
  handleClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.hidden ? (
          <header className="App-header">
            <h2>Full Name : {this.state.person.fullName}</h2>
            <h3> Biography : {this.state.person.bio}</h3>
            <img src={this.state.person.imgPub} alt="Alicia" width="400px" />
            <h4> Profession : {this.state.person.profession}</h4>
          </header>
        ) : (
          <h1> Click the Button to see the Info</h1>
        )}
        <button onClick={this.handleClick}>click Me !</button>
        <h5> {this.state.counter}</h5>
      </div>
    );
  }
}

export default App;
