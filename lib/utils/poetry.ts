import axios from "axios";
import _ from "lodash";
import random from "./random";

let shijingCache: any[] = [];
let tangshiCache: any[] = [];
let songshiCache: any[] = [];

// 诗经
export const shijing = async () => {
  const url =
    "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/shijing/shijing.json";
  const result = await axios.get(url);
  shijingCache = result.data;
  return shijingCache;
};

export const shijingFindOnce = async () => {
  if (!shijingCache.length) {
    await shijing();
  }
  return random.choice(shijingCache);
};

// 唐诗
export const tangshi = async () => {
  const max = 57000 / 1000;
  const url = `https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/json/poet.tang.${random.int(
    0,
    max
  ) * 1000}.json`;
  const result = await axios.get(url);
  tangshiCache = result.data;
  return tangshiCache;
};

export const tangshiFindOnce = async () => {
  if (!tangshiCache.length) {
    await tangshi();
  }
  return random.choice(tangshiCache);
};

// 宋诗
export const songshi = async () => {
  const max = 99000 / 1000;
  const url = `https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/json/poet.song.${random.int(
    0,
    max
  ) * 1000}.json`;
  const result = await axios.get(url);
  songshiCache = result.data;
  return songshiCache;
};

export const songshiFindOnce = async () => {
  if (!songshiCache.length) {
    await songshi();
  }
  return random.choice(songshiCache);
};
