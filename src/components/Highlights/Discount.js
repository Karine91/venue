import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";
import CountUp from "react-countup";

class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountStart: 0,
      discountEnd: 30
    };
  }

  onReveal = () => {
    this.start();
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.onReveal}>
            <div className="discount_percentage">
              <CountUp
                start={this.state.discountStart}
                duration={4}
                end={this.state.discountEnd}
                suffix="%"
              >
                {({ countUpRef, start }) => {
                  this.start = start;
                  return <span className="discount_amount" ref={countUpRef} />;
                }}
              </CountUp>

              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores corrupti molestiae odit.
              </p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
