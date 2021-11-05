import React from "react";
import _ from "lodash";
import "./player-fantasy-rank-component.css";

export default class PlayerFantasyRankComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    const { playerStats } = this.props;
    const ranks = _.pick(playerStats, ["ROTO8", "ROTO9", "DFS"]);
    const { ROTO8, ROTO9, DFS } = ranks;

    return (
      <div className="player-fantasy-rank-component">
        <div>{ROTO8}</div>
        <div>{ROTO9}</div>
        <div>{DFS}</div>
      </div>
    );
  }
}
