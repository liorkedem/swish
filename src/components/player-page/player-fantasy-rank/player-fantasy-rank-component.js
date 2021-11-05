import React from "react";

import "./player-fantasy-rank-component.css";

export default class PlayerFantasyRankComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fantasyRank } = this.props;
    const { ROTO8, ROTO9, DFS } = fantasyRank;

    return (
      <div className="player-fantasy-rank-component">
        <div>ROTO8: #{ROTO8}</div>
        <div>ROTO9: #{ROTO9}</div>
        <div>DFS: #{DFS}</div>
      </div>
    );
  }
}
