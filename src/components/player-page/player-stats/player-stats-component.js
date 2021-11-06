import React from "react";
import "./player-stats-component.css";

export default class PlayerStatsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategory(name, value) {
    return (
      <div className="category-wrapper">
        <div className="category-name">{name}</div>
        <div className="category-value">{value}</div>
      </div>
    );
  }

  render() {
    const { playerStats } = this.props;
    return (
      <div className="player-stats-component">
        {Object.entries(playerStats).map(([key, value]) =>
          this.renderCategory(key, value)
        )}
      </div>
    );
  }
}
