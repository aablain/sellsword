import React, { Component } from "react";

// type Props = {
//     title: string,
//     subtitle: string,
//     buttonLink: string
// };

export default class Section extends Component {
    // props: Props;

    constructor(props) {
        super(props);

        this.state = {
            canBook: false,
            btnText: "Slot Not Open"
        };

        this.checkTime = this.checkTime.bind(this);
    }

    componentDidMount() {
        this.checkTime();
    }

  render() {
      return <section className={`day-section${this.state.canBook ? " open-for-booking" : " cannot-book"}`}>
          <h3 className="day-section-title">{this.props.title}</h3>
          <p className="day-section-subtitle">{this.props.subtitle}</p>
          <span className="day-section-button">{this.state.canBook ? "Book" : this.props.btnText}</span>
        </section>;
  }

    checkTime() {
        if (this.props.date.day !== 0 && (this.props.date.hour > 7 && this.props.date.hour < 18)) {
            if (this.props.period === 1 && (this.props.date.hour > 7 && this.props.date.hour < 12)) {
                this.setState({ canBook: true });
            } else if (this.props.period === 2 && (this.props.date.hour > 11 && this.props.date.hour < 15)) {
                this.setState({ canBook: true });
            } else if (this.props.period === 3 && (this.props.date.hour > 7 && this.props.date.hour < 12)) {
                this.setState({ canBook: true });
            }
        }
    }
}
