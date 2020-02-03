import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}

export async function saveGenre(genre) {
  return http.post(apiEndpoint, genre);
}
