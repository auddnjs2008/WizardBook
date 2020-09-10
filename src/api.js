import axios from "axios";

const Gryffindor = "5a05e2b252f721a3cf2ea33f";
const Slytherin = "5a05dc8cd45bd0a11bd5e071";
const Hufflepuff = "5a05dc58d45bd0a11bd5e070";
const Ravenclaw = "a05da69d45bd0a11bd5e06f";

const api = axios.create({
  baseURL: "https://www.potterapi.com/v1/",
  params: {
    key: "$2a$10$A7oGx5yOYhg/9kKIwGVsgeWR7ojSrHxhBZ7AkHksprcxIS/IB7NAm",
  },
});

export const RandomPick = {
  randomPick: () => api.get("/sortingHat"),
};

export const GryffindorApi = {
  houseInfo: () => api.get(`/houses/${Gryffindor}`),
  characters: () => api.get("characters?house=Gryffindor"),
};

export const SlytherinApi = {
  houseInfo: () => api.get(`/houses/${Slytherin}`),
  characters: () => api.get("characters?house=Slytherin"),
};

export const HufflepuffApi = {
  houseInfo: () => api.get(`/houses/${Hufflepuff}`),
  characters: () => api.get("characters?house=Hufflepuff"),
};

export const RavenclawApi = {
  houseInfo: () => api.get(`/houses/${Ravenclaw}`),
  characters: () => api.get("characters?house=Ravenclaw"),
};

export const Spells = {
  spells: () => api.get("/spells"),
};
