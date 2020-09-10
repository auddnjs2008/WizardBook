import React from "react";
import HomePresenter from "./HomePresenter";
import { RandomPick } from "../../api";

export default class extends React.Component {
  state = {
    randomRoom: null,
    inputName: "",
    error: null,
    loading: true,
  };

  handleSubmit = () => {
    const { inputName } = this.state;
    if (inputName !== "") {
      this.inputName();
    }
  };

  inputName = async () => {
    try {
      const { data } = await RandomPick.randomPick();
      this.setState({
        randomRoom: data,
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
    const { RandomPick, inputName, error, loading } = this.state;
    return (
      <HomePresenter
        RandomPick={RandomPick}
        inputName={inputName}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
