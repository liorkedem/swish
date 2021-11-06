import React from "react";
import _ from "lodash";
import "./player-stats-splits-component.css";

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

  renderPeriod(periodStats) {
    const { period, stats } = periodStats;
    return (
      <div className="period-wrapper">
        {period}
        {Object.entries(stats).map(([key, value]) =>
          this.renderCategory(key, value)
        )}
      </div>
    );
  }

  render() {
    const { playerStats } = this.props;
    return (
      <div className="player-stats-splits-component">
        {/* {_.map(playerStats, this.renderPeriod)} */}
        {Object.entries(playerStats).map(([key, value]) =>
          this.renderPeriod({ period: [key], stats: value })
        )}
      </div>
    );
  }
}
