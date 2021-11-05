import React from "react";
import "./player-page-component.css";
import PlayerBasicInfoComponent from "./player-basic-info/player-basic-info-component";
import PlayerFantasyRankComponent from "./player-fantasy-rank/player-fantasy-rank-component";
import ApiService from "../../services/api-services/api-service.js";

export default class PlayerPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      playerStats: {},
      fantasyRank: {},
    };
  }

  async componentDidMount() {
    this.initPlayer();
  }

  async initPlayer() {
    const { playerId } = this.props;
    const player = await ApiService.getPlayerProfile(playerId);
    const playerStats = await ApiService.getPlayerStats(playerId);

    const fantasyRank = {};
    for (const category of ["ROTO8", "ROTO9", "DFS"]) {
      fantasyRank[category] = await ApiService.getFantasyRank(playerId, {
        CATEGORY: category,
      });
    }
    this.setState({ player, playerStats, fantasyRank });
  }

  render() {
    const { player, playerStats, fantasyRank } = this.state;
    return (
      <div className="player-page-component">
        <PlayerBasicInfoComponent player={player} />
        <PlayerFantasyRankComponent fantasyRank={fantasyRank} />
      </div>
    );
  }
}
