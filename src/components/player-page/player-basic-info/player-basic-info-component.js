import React from "react";
import "./player-basic-info-component.css";
import { Banner } from "monday-ui-react-core";
import { TEAMS } from "../../../constants/teams";

export default class PlayerBasicInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { player } = this.props;
    const playerStatus = `${TEAMS[player.TEAM]?.emoji} ${
      TEAMS[player.TEAM]?.city
    } ${TEAMS[player.TEAM]?.nickname} | ${player.POSITION} | ${player.HEIGHT}`;

    return (
      <div className="player-basic-info-component">
        <Banner title={player.NAME} subtitle={playerStatus} />
      </div>
    );
  }
}
