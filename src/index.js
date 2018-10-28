import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import List from "./List";
import "./styles.css";

class App extends Component {
  state = {
    loader: false,
    data: [],
    store: []
  };

  filterNames = e => {
    this.setState({
      users: this.state.store.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  };

  componentDidMount() {
    this.setState({ loader: true });
    axios
      .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
      .then(json =>
        json.data.results.map(result => ({
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        }))
      )
      .then(newData =>
        this.setState({ users: newData, store: newData, loader: false })
      )
      .catch(error => alert(error));
  }

  render() {
    const { users } = this.state;
    console.log(this.state);
    return (
      <div className="Card">
        <div className="header">NAME LIST</div>
        <SearchBar searchFunc={this.filterNames} />
        <List usernames={users} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
