/* eslint-disable consistent-return */
import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';
import AUTHORIZATION_TOKEN from '../../constants/authorizationToken';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, navigate, dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization: `Bearer ${AUTHORIZATION_TOKEN}`
      }
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
  }
};

export default makeRequest;
