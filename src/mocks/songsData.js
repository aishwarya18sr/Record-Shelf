export const mockSongsData = [
  {
    id: 'mock song id 1',
    name: 'mock title 1',
    genre: {
      id: 'mock genre id 1',
      name: 'mock genre name 1'
    },
    artist: {
      id: 'mock artist id 1',
      name: 'mock artist name 1'
    },
    imageUrl: 'mock image url 1',
    publishedAt: '2021-06-11T00:00:00'
  },
  {
    id: 'mock song id 2',
    name: 'mock title 2',
    genre: {
      id: 'mock genre id 2',
      name: 'mock genre name 2'
    },
    artist: {
      id: 'mock artist id 2',
      name: 'mock artist name 2'
    },
    imageUrl: 'mock image url 2',
    publishedAt: '2002-06-25T00:00:00'
  }];

export const mockSongsDataWithLikes = [
  {
    id: 'mock song id 1',
    name: 'mock title 1',
    genre: {
      id: 'mock genre id 1',
      name: 'mock genre name 1'
    },
    artist: {
      id: 'mock artist id 1',
      name: 'mock artist name 1'
    },
    imageUrl: 'mock image url 1',
    publishedAt: '2021-06-11T00:00:00',
    likeDetails: {
      count: 1,
      like: true
    }
  },
  {
    id: 'mock song id 2',
    name: 'mock title 2',
    genre: {
      id: 'mock genre id 2',
      name: 'mock genre name 2'
    },
    artist: {
      id: 'mock artist id 2',
      name: 'mock artist name 2'
    },
    imageUrl: 'mock image url 2',
    publishedAt: '2002-06-25T00:00:00',
    likeDetails: {
      count: 2,
      like: false
    }
  }];

export const mockSongsDataWithUpdatedLikes = [
  {
    id: 'mock song id 1',
    name: 'mock title 1',
    genre: {
      id: 'mock genre id 1',
      name: 'mock genre name 1'
    },
    artist: {
      id: 'mock artist id 1',
      name: 'mock artist name 1'
    },
    imageUrl: 'mock image url 1',
    publishedAt: '2021-06-11T00:00:00',
    likeDetails: {
      count: 1,
      like: true
    }
  },
  {
    id: 'mock song id 2',
    name: 'mock title 2',
    genre: {
      id: 'mock genre id 2',
      name: 'mock genre name 2'
    },
    artist: {
      id: 'mock artist id 2',
      name: 'mock artist name 2'
    },
    imageUrl: 'mock image url 2',
    publishedAt: '2002-06-25T00:00:00',
    likeDetails: {
      count: 1,
      like: true
    }
  }];

export const mockSongLikeData1 = {
  like: true,
  count: 1
};

export const mockSongLikeData2 = {
  like: false,
  count: 2
};

export const mockSongLikeResponse1 = {
  data: mockSongLikeData1
};

export const mockSongLikeResponse2 = {
  data: mockSongLikeData2
};
