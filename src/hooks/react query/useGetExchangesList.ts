import { useQuery, UseQueryResult } from 'react-query';
import CONSTANTS from '../../constants/index.constants';
import Axios from '../../utils/Api';

const useGetExchangesList = (): UseQueryResult =>
  useQuery(CONSTANTS.exchangeList, async () => {
    await Axios.get(CONSTANTS.GET_EXCHANGE_LIST);
  });

export default useGetExchangesList;
