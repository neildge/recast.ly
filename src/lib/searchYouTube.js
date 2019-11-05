import API_KEY from '../config/youtube.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: `https://www.googleapis.com/youtube/v3/search?q=${options.query}&part=snippet&maxResults=${options.max}&key=${options.key}`,
  //   type: 'GET',
  //   contentType: 'application/json',
  //   // data: data.items,
  //   success: (data) => {
  //     console.log(data.items);
  //     // return callback(data.items);
  //   },
  //   error: (data) => {
  //     console.error('Search failed ', data);
  //   }
  // });
  // callback();
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videEmbaddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });

};

export default searchYouTube;

// function (data) {
//   console.log('Youtube video search successful');
//   console.log(data.items);
//   return data.items;
// }