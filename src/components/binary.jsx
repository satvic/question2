import React, { Component } from "react";

class Duplicate extends Component {
  state = {
    el: [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  };

  dup = (el = []) => {
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < this.state.el.length) {
       if (this.state.el[right] === 0) {
          if (right - left > max) {
             max = right - left
          };
          right++;
          left = right;
       } else {
          right++
       };
    };
    return right - left > max ? right - left : max;
 }
  render() {
    return <h1>The no. of consecutive 1's are -- {this.dup()}</h1>;
  }
}

export default Duplicate;
