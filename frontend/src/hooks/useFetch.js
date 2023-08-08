import { useState } from 'react';
import api from '../utils/api';

function useFetch(initialDataValue = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(initialDataValue);
  const fetchingData = async (URL) => {
    api.get(URL).then((response) => setData(response)).catch((e) => setErrors(e))
      .finally(setIsLoading(false));
    // try {
    //   setIsLoading(true);
    //   const response = await fetch(URL);
    //   // if (???) {
    //   // verify false return of API
    //   // const error = await response.json();
    //   // throw error.message;
    //   // }
    //   const dataFetched = await response.json();
    //   setData(dataFetched);
    // } catch (error) { setErrors(error); } finally { setIsLoading(false); }
  };
  return [isLoading, errors, data, fetchingData];
}
export default useFetch;
