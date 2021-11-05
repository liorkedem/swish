import React from "react";
import "./player-page-component.css";
import PlayerBasicInfoComponent from "./player-basic-info/player-basic-info-component";
import ApiService from "../../services/api-services/api-service.js";

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

  render() {
    const { player } = this.state;
    return (
      <div className="player-page-component">
        <PlayerBasicInfoComponent player={player} />
      </div>
    );
  }
}
