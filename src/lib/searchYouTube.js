import API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: `https://www.googleapis.com/youtube/v3/search?q=${options.query}&part=snippet&maxResults=${options.max}&key=${options.key}`,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('Youtube video search successful');
      console.log(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Search failed ', data);

    }
  });
  callback();
};


export default searchYouTube;
