import React from "react";
import ApiService from "../../services/api-services/api-service.js";
import { TEAMS } from "../../constants/teams";
import "./player-page-component.css";

export default class PlayerPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };
  }

  async componentDidMount() {
    this.initPlayer();
  }

  async initPlayer() {
    const { playerId } = this.props;
    const player = await ApiService.getPlayerProfile(playerId);
    this.setState({ player });
  }

  renderPlayerBasicInfo() {
    const { player } = this.state;

    return (
      <div className="player-basic-info-wrapper">
        <div className="player-name">{player.NAME}</div>
        <div className="player-position">{player.POSITION}</div>
        <div className="player-height">{player.HEIGHT}</div>
        <div className="player-team">{TEAMS[player.TEAM]?.nickname}</div>
        <div className="team-logo">{TEAMS[player.TEAM]?.emoji}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="player-page-component">
        {this.renderPlayerBasicInfo()}
      </div>
    );
  }
}
