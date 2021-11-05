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
      fantasyRanks: {},
    };
  }

  async componentDidMount() {
    this.initPlayer();
  }

  async initPlayer() {
    const { playerId } = this.props;
    const player = await ApiService.getPlayerProfile(playerId);
    const playerStats = await ApiService.getPlayerStats(playerId);
    const fantasyRanks = await ApiService.getFantasyRanks(playerId);
    this.setState({ player, playerStats, fantasyRanks });
  }

  render() {
    const { player, playerStats, fantasyRanks } = this.state;
    return (
      <div className="player-page-component">
        <PlayerBasicInfoComponent player={player} />
        <PlayerFantasyRankComponent fantasyRanks={fantasyRanks} />
      </div>
    );
  }
}
