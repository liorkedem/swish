import React from "react";
import "./player-basic-info-component.css";
import { TEAMS } from "../../../constants/teams";

export default class PlayerBasicInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    const { player } = this.props;

    return (
      <div className="player-basic-info-component">
        <div className="player-name">{player.NAME}</div>
        <div className="player-status">
          {TEAMS[player.TEAM]?.emoji} {TEAMS[player.TEAM]?.city}{" "}
          {TEAMS[player.TEAM]?.nickname} | {player.POSITION} | {player.HEIGHT}
        </div>
      </div>
    );
  }
}
