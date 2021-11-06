import React from "react";
import _ from "lodash";
import "./player-stats-splits-component.css";
import { ALL_STATS_CATEGORIES } from "../../../constants/stats";

export default class PlayerStatsSplitsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCell = (value) => {
    return (
      <div className="category-wrapper">
        <div className="category-value">{value}</div>
      </div>
    );
  };

  renderPeriodData = (periodStats) => {
    return (
      <div className="period-wrapper">
        {_.map(Object.values(periodStats), this.renderCell)}
      </div>
    );
  };

  renderCategoryNames = () => {
    return (
      <div className="category-names-wrapper">
        {ALL_STATS_CATEGORIES.map(this.renderCell)}
      </div>
    );
  };

  render() {
    const { playerStats } = this.props;
    const periodsData = Object.values(playerStats);
    return (
      <div className="player-stats-splits-component">
        {this.renderCategoryNames()}
        {_.map(periodsData, this.renderPeriodData)}
      </div>
    );
  }
}
