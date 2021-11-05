export default class ApiClientService {
  static async getData(url, params = {}) {
    const queryParams = convertObjectToQueryParams(params);
    const urlWithParams = `${url}${queryParams}`;
    const response = await fetch(urlWithParams);
    if (response.ok) {
      debugger;
      const result = await response.json();
      return result;
    }
    return null;
  }

  static async postData(url, params = {}) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...params }),
    };

    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    return null;
  }
}

// comment

const convertObjectToQueryParams = (obj) => {
  if (obj) {
    return (
      "?" +
      Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join("&")
    );
  }
  return "";
};
