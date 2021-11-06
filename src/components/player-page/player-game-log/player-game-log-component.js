import React from "react";
import _ from "lodash";
import { List, ListItem, ListTitle } from "monday-ui-react-core";
import "./player-game-log-component.css";

export default class PlayerGameLogComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSingleGame = (singleGameLog) => {
    return <ListItem>{JSON.stringify(singleGameLog)}</ListItem>;
  };

  render() {
    const { gameLog } = this.props;
    return (
      <div className="player-game-log-component">
        <List>
          <ListTitle>Game Log</ListTitle>
          {_.map(gameLog, this.renderSingleGame)}
        </List>
      </div>
    );
  }
}
