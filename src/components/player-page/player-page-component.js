import React from "react";
import ApiService from "../../services/api-services/api-service.js";

export default class PlayerPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.initPlayer();
  }

  async initPlayer() {
    const { playerId } = this.props;
    const player = await ApiService.getPlayerProfile(playerId);
    // const player = await ApiService.getHealth();
    this.setState({ player });
  }

  render() {
    const { playerId } = this.props;
    return (
      <div className="player-page-component">
        <div>{playerId}</div>
      </div>
    );
  }
}
