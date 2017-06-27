import React from 'react';
import Lab1Ratings from './ratings.jsx';

class Lab1NewsItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="news-item">
                        <div className="title">{this.props.title}</div>
                        <div className="content">
                                <Lab1Ratings/>
                            <div className="img" style={{'backgroundImage': 'url(assets/images/news_image.png)'}}></div>
                            <div className="dich bottom"></div>
                        </div>
                        <div className="shadow"></div>
                        <div className="description">Восемь лет спустя после событий Темного Рыцаря, в Готэм приходит новый лидер террористов, Бэйн, неся с собой хаос и разрушения
                        </div>
                        <div className="play-video-btn">Show video</div>
                    </div>
    }
}

class Lab1News extends React.Component {

    constructor(props) {
        super(props);
        this.items = ['кино', 'сериалы', 'афиша', 'тексты', 'программы и шоуc']
    }

    render() {
        let news = [];
        for (var i = 0; i < this.items.length; i++) {
            news.push(<Lab1NewsItem key={i} title={this.items[i]} />);
        }
        return <div className="news-panel">
                <div className="news-items-container">
                {news}
                </div>
            </div>
    }
}



export {Lab1News, Lab1NewsItem}

