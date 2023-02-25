import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';
import AUTHORIZATION_TOKEN from '../../constants/authorizationToken';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    ...apiEndPoint,
    url: `${BACKEND_URL}/${apiEndPoint.url}`,
    ...dynamicConfig,
    headers: {
      authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
    },
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
