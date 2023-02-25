export const BACKEND_URL = 'http://localhost:8080';

export const RECORDS_URL = {
  url: 'api/records',
  method: 'get',
};

export const getLikesUrl = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'get',
});

export const changeLikesUrl = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'patch',
});
