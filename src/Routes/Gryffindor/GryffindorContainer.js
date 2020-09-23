import React from "react";
import { GryffindorApi } from "../../api";
import GryffindorPresenter from "./GryffindorPresenter";

export default class extends React.Component {
  state = {
    houseInfo: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await GryffindorApi.houseInfo();
      this.setState({ houseInfo: data[0] });
      console.log(this.state.houseInfo);
    } catch (error) {
      this.setState({ error: "Can't find Information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { houseInfo, loading, error } = this.state;
    return (
      <GryffindorPresenter
        houseInfo={houseInfo}
        loading={loading}
        error={error}
      ></GryffindorPresenter>
    );
  }
}
