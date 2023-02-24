const { REACT_APP_BACKEND_URL = '' } = process.env;

const ENV_CONST: Record<string, string> = {
  backendURL: REACT_APP_BACKEND_URL
};

export default ENV_CONST;
