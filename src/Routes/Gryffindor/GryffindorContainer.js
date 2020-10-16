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
    } catch (error) {
      this.setState({ error: "Can't find Information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { houseInfo, loading, error, Length, value, SliderRef } = this.state;

    return (
      <GryffindorPresenter
        houseInfo={houseInfo}
        loading={loading}
        error={error}
        Length={Length}
        value={value}
        SliderRef={SliderRef}
        leftSliderControl={this.leftSliderControl}
        rightSliderControl={this.rightSliderControl}
      ></GryffindorPresenter>
    );
  }
}
