import React from 'react';
import Lab1Menu from './menu.jsx';
import Lab1Sliser from './slider.jsx';
import Lab1SelectedFilm from './selectedFilm.jsx';
import { Lab1News, Lab1NewsItem } from './news.jsx';

class Lab1 extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
        <link href="css/styleLab1.css" rel="stylesheet" />
    <div>
       <Lab1Menu></Lab1Menu>
    </div>
    <div id="search-user-panel">
        <div className="margin-container">
            <div className="dich bottom"></div>
            <div className="user-outh">
                <span>Создать акаунт</span>
                <span>|</span>
                <span>Войти</span>
            </div>
            <div className="user-info">
                <img src="" />
                <a href="">Link</a>
                <span><img src="assets/images/user_icon.png"></img>Name</span>
            </div>
            <div className="search-panel">
                <div className="search-btn">Поиск</div>
                <div className="dich big bottom"></div>
                <input type="text" name="" placeholder="WTF" />
                <div className="search-info">расширенный поиск•что ищут?</div>
                <div className="dich-search"></div>
            </div>
        </div>
    </div>
    <div className="slider-container">
        <div className="slider-title">
            Рейтинг ожиданий
        </div>
    <Lab1Sliser/>
    </div>
    <div className="good-title">
        Пусть к вам проникнет наше настроение и останется только хороше
    </div>
    <div className="padding-container inline">
        <div className="main-col first">
            <Lab1News/>
        </div>
        <div className="sub-col first">
            <div className="news-items-container">
                <div className="black-box">
                    <div className="head"></div>
                    <hr/>
                </div>
            </div>
        </div>
        <Lab1SelectedFilm/>
        <div className="sub-col">
            <div className="news-items-container">
                <div className="black-box">
                    <div className="head">
                        <div className="dich bottom"></div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="content padding-container">
            <div className="item">
                <div className="head">sfsdfsdfds1</div>
                <ul className="list">
                    <li><a href="/#">sdfsdfsdf</a></li>
                    <li><a href="/#">sdfsdfsdf</a></li>
                    <li><a href="/#">sdfsdfsdf</a></li>
                </ul>
            </div>
            <img id="logo" className="padding-container" src="assets/images/logo.png"></img>
            <div className="dich-footer margin-container"></div>
        </div>
        <div className="back padding-container"></div>
    </footer>
</div>

    }


}

export default Lab1;
