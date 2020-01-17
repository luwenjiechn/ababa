import * as poetry from "./lib/utils/poetry";

const getPoetry = async () => {
  const data = await poetry.tangshiFindOnce();
  console.log(data);
  return data;
};

getPoetry();
