import React from "react";
import { GryffindorApi } from "../../api";
import GryffindorPresenter from "./GryffindorPresenter";

export default class extends React.Component {
  state = {
    houseInfo: null,
    loading: true,
    error: null,
    Length: 0,
    value: 0,
    SliderRef: React.createRef(),
  };

  ScrollSpeeder = () => {
    const { SliderRef } = this.state;
    let value = 0;
    const step = 50;
    setTimeout(() => {
      value = value + step;
    }, 100);
    if (value < SliderRef.current.offsetWidth) this.ScrollSpeeder();
    else return value;
  };

  leftSliderControl = () => {
    const { Length, SliderRef } = this.state;
    if (Length !== 0) {
      // 제일 맨왼쪽이지 않을경우

      this.setState({
        Length: Length - SliderRef.current.offsetWidth,
        value: SliderRef.current.offsetWidth * -1,
      });
      SliderRef.current.scrollLeft -= SliderRef.current.offsetWidth + 10;
    } else {
      this.setState({
        value: 0,
      });
    }
  };
  rightSliderControl = () => {
    const { Length, SliderRef } = this.state;
    if (
      Length <=
      SliderRef.current.scrollWidth - SliderRef.current.offsetWidth
    ) {
      this.setState({
        Length: Length + SliderRef.current.offsetWidth,
        value: SliderRef.current.offsetWidth,
      });
      SliderRef.current.scrollLeft += SliderRef.current.offsetWidth + 10;
    } else {
      this.setState({
        value: 0,
      });
    }
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
    console.log(Length, value);

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
