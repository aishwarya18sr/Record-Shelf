import axiosMock from 'axios';
import makeRequest from './makeRequest';
import AUTHORIZATION_TOKEN from '../../constants/authorizationToken';

jest.mock('axios');

describe('makeRequest', () => {
  it('should load and display the data', async () => {
    axiosMock.mockResolvedValueOnce({
      data: [
        {
          id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
          name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
          genre: {
            id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
            name: 'Pop',
          },
          artist: {
            id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
            name: 'Maroon 5',
          },
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
          publishedAt: '2021-06-11T00:00:00',
        },

      ],
    });

    await makeRequest({
      url: '/',
      method: 'get',
      headers: {
        authorization: AUTHORIZATION_TOKEN,
      },
    });
    expect(axiosMock).toHaveBeenCalledTimes(1);
  });
});
