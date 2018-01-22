import React, { Component } from "react";
import _ from "lodash";
import Header from "./header";
import Section from "./section";
import Bio from "./bio";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: {}
        }
    }

    componentDidMount() {
        const today = new Date();
        const date = {
            date: today,
            day: today.getDay(),
            hour: today.getHours(),
            minute: today.getMinutes()
        };
        this.setState({ date });
    }

    render() {
        return <div className="home">
            <Header />
            <div className="home-sections">
              <Section date={this.state.date} period={1} title="Morning Appointments" subtitle="9:00am - 12:00pm" btnLink="" btnText="Booking open 8am - 12pm" />
              <Section date={this.state.date} period={2} title="Afternoon Appointments" subtitle="1:00pm - 3:00pm" btnLink="" btnText="Booking open 12pm - 3:00pm" />
              <Section date={this.state.date} period={3} title="Evening Appointments" subtitle="3:00pm - 6:00pm" btnLink="" btnText="Booking open 2pm - 6pm" />
            </div>
            <Bio />
          </div>;
    }
}