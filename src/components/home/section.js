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
    }

  render() {
      return <section className="day-section">
          <h3 className="day-section-title">{this.props.title}</h3>
          <p className="day-section-subtitle">{this.props.subtitle}</p>
          <button className="day-section-button">Book</button>
        </section>;
  }
}
