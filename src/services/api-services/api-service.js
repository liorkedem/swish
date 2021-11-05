import ApiClientService from "../api-client-service/api-client-service";

const BASE_URL = "http://lior-kedem.com/swish";
const ROUTES = {
  PLAYER_PROFILE: { RELATIVE_PATH: "STATS_GET.php", TAG: "getPlayerById" },
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

  static async getHealth() {
    const url = `${BASE_URL}/stats.php`;
    console.log("--------------", url);
    return await ApiClientService.getData(url);
  }
}
