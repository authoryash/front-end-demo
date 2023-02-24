import { isEmpty } from 'lodash';
import { useQuery, UseQueryResult } from 'react-query';
import CONSTANTS from '../../constants/index.constants';
import Axios from '../../utils/Api';

interface GetCurrenciesList {
  currentExchange: string;
  pageNumber: number;
}

const useGetCurrenciesList = ({ currentExchange, pageNumber }: GetCurrenciesList): UseQueryResult =>
  useQuery(
    [CONSTANTS.backendURL, currentExchange],
    async () => {
      await Axios.get(
        CONSTANTS.GET_CURRENCY_LIST({
          exchange: currentExchange,
          pageNumber,
          pageSize: CONSTANTS.currencyListPageSize
        })
      );
    },
    { enabled: !isEmpty(currentExchange) }
  );

export default useGetCurrenciesList;
