import React from "react";
import InfoPresenter from "./InfoPresenter";

export default class extends React.Component {
  state = {
    name: localStorage.getItem("name"),
    dormitory: localStorage.getItem("dormitory"),
    error: null,
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { name, dormitory, error, loading } = this.state;
    return (
      <InfoPresenter
        name={name}
        dormitory={dormitory}
        error={error}
        loading={loading}
      />
    );
  }
}
