import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tag.</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = id => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btm-lg"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  formatCount = () =>
    this.state.count === 0 ? <h1>Zero</h1> : this.state.count;

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
