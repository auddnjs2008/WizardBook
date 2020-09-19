import React from "react";
import HomePresenter from "./HomePresenter";
import { RandomPick } from "../../api";

export default class extends React.Component {
  state = {
    randomRoom: null,
    Name: "",
    error: null,
    loading: false,
    Entrance: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Name } = this.state;
    if (Name !== "") {
      this.inputName();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      Name: value,
    });
  };

  inputName = async () => {
    this.setState({ loading: true, Entrance: false });
    localStorage.setItem("name", this.state.Name);
    try {
      const { data } = await RandomPick.randomPick();
      localStorage.setItem("dormitory", data);
      this.setState({
        randomRoom: data,
        Entrance: true,
      });
    } catch {
      this.setState({
        error: "Cant load  the Wizard Hat",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { randomRoom, Name, error, loading, Entrance } = this.state;
    return (
      <HomePresenter
        randomRoom={randomRoom}
        Name={Name}
        error={error}
        loading={loading}
        Entrance={Entrance}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
