import React from "react";
import "./player-page-component.css";
import PlayerBasicInfoComponent from "./player-basic-info/player-basic-info-component";
import PlayerFantasyRankComponent from "./player-fantasy-rank/player-fantasy-rank-component";
import PlayerStatsComponent from "./player-stats/player-stats-component";
import PlayerStatsSplitsComponent from "./player-stats-splits/player-stats-splits-component";
import ApiService from "../../services/api-services/api-service.js";
import { PRIMARY_STATS_PERIOD } from "../../constants/stats";

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
    const playerStats = await ApiService.getPlayerStatsFromAllPeriods(playerId);
    const fantasyRanks = await ApiService.getFantasyRanks(playerId);
    this.setState({ player, playerStats, fantasyRanks });
  }

  render() {
    const { player, playerStats, fantasyRanks } = this.state;
    const playerPrimaryStats = playerStats[PRIMARY_STATS_PERIOD] || {};
    return (
      <div className="player-page-component">
        <div className="player-page-head">
          <PlayerBasicInfoComponent player={player} />
          <PlayerFantasyRankComponent fantasyRanks={fantasyRanks} />
        </div>
        <div className="player-page-body">
          <PlayerStatsComponent playerStats={playerPrimaryStats} />
          <PlayerStatsSplitsComponent playerStats={playerStats} />
        </div>
      </div>
    );
  }
}
