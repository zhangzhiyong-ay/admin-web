import { PersistedStateOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Boolean} permanent 是否持久存储，为true时则存储到本地，为false时，则存储至session。
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistConfig = (key: string, permanent?: boolean, paths?: string[]) => {
  let storage;
  if (permanent) {
    storage = localStorage;
  } else {
    storage = sessionStorage;
  }
  const persist: PersistedStateOptions = {
    key,
    storage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;
