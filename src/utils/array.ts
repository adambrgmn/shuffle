import { random } from 'lodash-es';

export const pickRandom = <T>(arr: T[]): T | void => {
  if (arr.length > 0) {
    const idx = random(0, arr.length - 1);
    return arr[idx];
  }
};
