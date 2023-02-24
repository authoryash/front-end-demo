interface GetCurrenciesList {
  exchange: string;
  pageNumber: number;
  pageSize: number;
}
const API_END_POINTS = {
  GET_EXCHANGE_LIST: '/coinigy/publicExchanges',
  GET_CURRENCY_LIST: (
    { exchange, pageNumber, pageSize }: GetCurrenciesList = {
      exchange: 'binance',
      pageNumber: 1,
      pageSize: 50
    }
  ) => `/coinigy/publicMarkets?exchange=${exchange}&page_size=${pageSize}&page_number=${pageNumber}`
};

export default API_END_POINTS;
