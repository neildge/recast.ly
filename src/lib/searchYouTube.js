var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        console.log('callback in .done', items);
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });

};

export default searchYouTube;



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
