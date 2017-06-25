import React, { Component } from 'react';

// import './script/jquery-3.2.1.min.js';
// import './script.js';
import './BackgroundVideo.css';

// import HeaderMenu from './components/HeaderMenu';
// import MainContent from './components/MainContent';

class BackgroundVideo extends Component {
  render() {
    return (
          <div class="wrapper">
              <video autoplay id="bgvid" loop autoPlay>
                <source src={require("./video/forest.webm")} type="video/webm" />
                <source src={require("./video/forest.mp4")} type="video/mp4" />
                Тег video не поддерживается вашим браузером.
                <a href="forest.mp4">Скачайте видео</a>.
              </video>

              {/*<div id="menu-block">
                <HeaderMenu />
                <MainContent />
              </div>*/}
            
              <div id="info-block">
                <h1>Phasellus consectetur, nunc eget pellentesque dignissim</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis lectus neque, at faucibus neque consequat eu. Vivamus accumsan pulvinar mi nec molestie. Nam pretium nisi vitae tortor lacinia congue.</p>
                <button>Pause</button>
              </div>
          </div>
    );
  }
}

export default BackgroundVideo;
