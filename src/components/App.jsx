import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import Data from '../data/exampleVideoData.js';
import SearchYouTube from '../lib/searchYouTube.js';
import API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fake data
      data: Data,
      videoPlayer: Data[0],
    };
    this.clickedVideo = this.clickedVideo.bind(this);
    this.getData = this.getData.bind(this);
  }
  clickedVideo(event) {
    let result = event.target.textContent;

    Data.forEach((value, index) => {

      if (result === value.snippet.title) {
        this.setState({ videoPlayer: Data[index] });
      }
    });
  }

  getData(input) {
    console.log(input);
    // console.log('this is logged from getData', input);
    var res = SearchYouTube({key: API_KEY, q: input, max: 5}, console.log);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={SearchYouTube} getData={this.getData} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlayer} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.data} clickedVideo={this.clickedVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;





// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//         {/* <div><h5><em>search</em> view goes here</h5></div> */}
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={Data[0]}/>
//         {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={Data} />
//         {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
