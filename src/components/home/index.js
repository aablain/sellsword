import React, { Component } from "react";
import Header from "./header";
import Section from "./section";
import Bio from "./bio";

export default class Home extends Component {
    // constructor() {
    //     super(props);
    // }

    render() {
        return <div>
            <Header />
            <Section title="Morning Appointments" subtitle="(9:00am - 12:00pm)" btnLink="" />
            <Section title="Afternoon Appointments" subtitle="(1:00pm - 3:00pm)" btnLink="" />
            <Section title="Evening Appointments" subtitle="(3:00pm - 6:00pm)" btnLink="" />
            <Bio />
          </div>;
    }
}