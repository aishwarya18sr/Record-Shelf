import axios from 'axios';
import AUTHORIZATION_TOKEN from '../../constants/authorizationToken';
import { BACKEND_URL } from '../../constants/apiEndpoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    ...apiEndPoint,
    url: `${BACKEND_URL}/${apiEndPoint.url}`,
    ...dynamicConfig,
    headers: {
      authorization: AUTHORIZATION_TOKEN,
    },
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
