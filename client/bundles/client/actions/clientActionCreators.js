/* eslint-disable import/prefer-default-export */

import { TEST } from '../constants/clientConstants';

export const updateName = (text) => ({
  type: TEST,
  text,
});
