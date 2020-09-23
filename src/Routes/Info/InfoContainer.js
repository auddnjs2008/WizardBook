import React from "react";
import InfoPresenter from "./InfoPresenter";

export default class extends React.Component {
  state = {
    name: localStorage.getItem("name"),
    dormitory: localStorage.getItem("dormitory"),
    error: null,
    loading: true,
    backgroundImg: 0,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  handleClick = (e) => {
    setTimeout(() => this.setState({ backgroundImg: 1 }), 100);
  };

  handleMouseOut = (e) => {
    setTimeout(() => this.setState({ backgroundImg: 2 }), 100);
  };

  render() {
    const { name, dormitory, error, loading, backgroundImg } = this.state;
    return (
      <InfoPresenter
        name={name}
        dormitory={dormitory}
        error={error}
        loading={loading}
        backgroundImg={backgroundImg}
        handleClick={this.handleClick}
        handleMouseOut={this.handleMouseOut}
      />
    );
  }
}
