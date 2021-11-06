import _ from "lodash";
import ApiClientService from "../api-client-service/api-client-service";
import {
  ALL_STATS_CATEGORIES,
  FANTASY_STATS_CATEGORIES,
  PRIMARY_STATS_PERIOD,
  ALL_STATS_PERIODS,
} from "../../constants/stats";

const BASE_URL = "http://lior-kedem.com/swish";
const ROUTES = {
  PLAYER_PROFILE: { RELATIVE_PATH: "STATS_GET.php", TAG: "getPlayerById" },
  PLAYER_STATS: { RELATIVE_PATH: "STATS_GET.php", TAG: "getPersonalStatsById" },
  FANTASY_RANK: { RELATIVE_PATH: "STATS_GET.php", TAG: "getPersonalRankById" },
};

export default class ApiService {
  static async getPlayerProfile(playerId, options = {}) {
    const params = {
      ID: playerId,
      TAG: ROUTES.PLAYER_PROFILE.TAG,
    };
    const url = `${BASE_URL}/${ROUTES.PLAYER_PROFILE.RELATIVE_PATH}`;
    return await ApiClientService.getData(url, params);
  }

  static async getFantasyRanks(playerId, options = {}) {
    const fantasyRanks = {};
    for (const category of FANTASY_STATS_CATEGORIES) {
      fantasyRanks[category] = await this.getFantasyRankByCategory(
        playerId,
        category,
        options
      );
    }
    return fantasyRanks;
  }

  static async getFantasyRankByCategory(playerId, category, options = {}) {
    const params = {
      ID: playerId,
      TAG: ROUTES.FANTASY_RANK.TAG,
      CATEGORY: category,
      PERIOD: options.period || PRIMARY_STATS_PERIOD,
      ...options,
    };
    const url = `${BASE_URL}/${ROUTES.FANTASY_RANK.RELATIVE_PATH}`;
    return (await ApiClientService.getData(url, params)).RANK;
  }

  static async getPlayerStats(playerId, options = {}) {
    const params = {
      ID: playerId,
      TAG: ROUTES.PLAYER_STATS.TAG,
      PERIOD: options.period || PRIMARY_STATS_PERIOD,
      ...options,
    };
    const url = `${BASE_URL}/${ROUTES.PLAYER_STATS.RELATIVE_PATH}`;
    const playerStats = _.pick(
      await ApiClientService.getData(url, params),
      ALL_STATS_CATEGORIES
    );

    return playerStats;
  }

  static async getPlayerStatsFromAllPeriods(playerId, options = {}) {
    const playerStats = {};
    for (const period of ALL_STATS_PERIODS) {
      playerStats[period] = await this.getPlayerStats(playerId, { period });
    }
    return playerStats;
  }

  static async getHealth() {
    const url = `${BASE_URL}/stats.php`;
    console.log("--------------", url);
    return await ApiClientService.getData(url);
  }
}
