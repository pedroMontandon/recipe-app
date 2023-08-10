import { useState } from 'react';
import api from '../utils/api';

function useFetch(initialDataValue = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(initialDataValue);
  const fetchingData = async (URL) => {
    api.get(URL).then((response) => setData(response.data)).catch((e) => setErrors(e))
      .finally(setIsLoading(false));
  };
  return [isLoading, errors, data, fetchingData];
}
export default useFetch;
