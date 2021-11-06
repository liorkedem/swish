import React from "react";
import "./player-fantasy-rank-component.css";

export default class PlayerFantasyRankComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategoryRank(name, value) {
    return (
      <div className="category-wrapper">
        <div className="category-name">{name}</div>
        <div className="category-value">#{value}</div>
      </div>
    );
  }

  render() {
    const { fantasyRanks } = this.props;
    return (
      <div className="player-fantasy-rank-component">
        {Object.entries(fantasyRanks).map(([key, value]) =>
          this.renderCategoryRank(key, value)
        )}
      </div>
    );
  }
}
