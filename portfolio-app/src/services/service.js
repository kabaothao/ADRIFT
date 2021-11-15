import http from "../http-common";

class DataService {
  getAll(page = 0) {
    return http.get();
  }

}

export default new DataService();