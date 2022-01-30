import "./styles.css";
import React from "react";
import Header from "./Header";
import fetchTodo from "./api";
import Todo from "./Todo";

const api = "https://jsonplaceholder.typicode.com/todos";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      num: 1,
      hide: false
    };

    console.log("constructor called");
  }

  componentDidMount() {
    console.log("component mounted");
    this.run();
  }

  //  fetchTodo2(apiLink, id) {
  //   fetch(`${apiLink}/${id}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.num !== this.state.num) {
      console.log("component updated");
      this.run(this.state.num);
    }
  }

  toggle = () => {
    this.setState((prev) => ({
      ...prev,
      hide: !this.state.hide
    }));
  };

  next = () => {
    this.setState((prev) => ({
      ...prev,
      num: this.state.num + 1
    }));
  };

  async run(num = 1) {
    const [data, error] = await fetchTodo(api, num);
    if (error) {
      console.log("error while fetching");
      return;
    }
    this.setState((prev) => ({ ...prev, todo: { ...data } }));
  }

  render() {
    console.log("parent component rendered");
    const { title } = this.state.todo;
    return (
      <div>
        {!this.state.hide && <Header />}
        <hr />
        <h2>{this.state.num}</h2>
        <button type="button" onClick={this.next}>
          next:{" "}
        </button>
        <button type="button" onClick={this.toggle}>
          toggle header:{" "}
        </button>

        <Todo title={title} />
      </div>
    );
  }
}
