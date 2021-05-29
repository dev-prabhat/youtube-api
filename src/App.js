import React from 'react'
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';
import youtube from './Api/youtube';
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('Desi Nerd')
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  handleSubmit = async (searchTerm) => {
    const res = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;