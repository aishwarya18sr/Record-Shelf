export const BACKEND_URL = '/api/records';

export const RECORDS_URL = {
  url: '',
  method: 'get',
};

export const getLikesUrl = (recordId) => ({
  url: `/${recordId}/likes`,
  method: 'get',
});

export const changeLikesUrl = (recordId) => ({
  url: `/${recordId}/likes`,
  method: 'patch',
});
