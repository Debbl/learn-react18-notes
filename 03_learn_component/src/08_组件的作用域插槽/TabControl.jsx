import React, { Component } from "react";
import "./style.css";

export class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  handleClick(index) {
    this.props.changeIndex(index);
    this.setState({
      currentIndex: index,
    });
  }
  render() {
    const { titles, itemType } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        <h2>TabControl</h2>
        {titles.map((title, index) => (
          <span
            key={title}
            className={currentIndex === index ? "active" : ""}
            onClick={() => this.handleClick(index)}
          >
            {itemType(title)}
          </span>
        ))}
      </div>
    );
  }
}

export default TabControl;
