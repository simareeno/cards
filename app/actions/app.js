/* eslint import/prefer-default-export: 0 */
import * as types from './types/app';

export function defaultAction() {
  return {
    type: types.TEMP_ACTION
  };
}
