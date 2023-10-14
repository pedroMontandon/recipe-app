import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import api from '../utils/api';

function useFetch(initialDataValue = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(initialDataValue);
  const { push } = useHistory();
  useEffect(() => {
    const errorStatus = 401;
    console.log(errors);
    if (errors && errors.response.status === errorStatus) push('/');
  }, [errors]);
  const fetchingData = async (URL) => {
    const token = localStorage.getItem('token');
    console.log(token);
    api.get(
      URL,
      { headers: { Authorization: `Bearer ${token}` } },
    ).then((response) => setData(response.data)).catch((e) => setErrors(e))
      .finally(setIsLoading(false));
  };
  return [isLoading, errors, data, fetchingData];
}
export default useFetch;
