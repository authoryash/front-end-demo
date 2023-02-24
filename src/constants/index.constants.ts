import API_END_POINTS from './ApiEndPoints';
import APP_CONST from './app.contants';
import ENV_CONST from './env.constants';
import queryKeys from './QueryKeys';

const CONSTANTS: Record<string, any> = {
  ...APP_CONST,
  ...ENV_CONST,
  ...queryKeys,
  ...API_END_POINTS
};

export default CONSTANTS;
