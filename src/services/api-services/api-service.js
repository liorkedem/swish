import ApiClientService from "../api-client-service/api-client-service";

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

  static async getFantasyRankByCategory(playerId, category, options = {}) {
    const params = {
      ID: playerId,
      TAG: ROUTES.FANTASY_RANK.TAG,
      CATEGORY: category,
      PERIOD: options.period || "CURR_SEASON",
      ...options,
    };
    const url = `${BASE_URL}/${ROUTES.FANTASY_RANK.RELATIVE_PATH}`;
    return (await ApiClientService.getData(url, params)).RANK;
  }

  static async getFantasyRanks(playerId, options = {}) {
    const fantasyRanks = {};
    for (const category of ["ROTO8", "ROTO9", "DFS"]) {
      fantasyRanks[category] = await this.getFantasyRankByCategory(
        playerId,
        category,
        options
      );
    }
    return fantasyRanks;
  }

  static async getPlayerStats(playerId, options = {}) {
    const params = {
      ID: playerId,
      TAG: ROUTES.PLAYER_STATS.TAG,
      PERIOD: options.period || "CURR_SEASON",
      ...options,
    };
    const url = `${BASE_URL}/${ROUTES.PLAYER_STATS.RELATIVE_PATH}`;
    return await ApiClientService.getData(url, params);
  }

  static async getHealth() {
    const url = `${BASE_URL}/stats.php`;
    console.log("--------------", url);
    return await ApiClientService.getData(url);
  }
}
