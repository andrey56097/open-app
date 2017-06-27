import React from 'react';

class Lab1SelectedFilm extends React.Component {

    constructor(props) {
        super(props);
        this.items = ['кино', 'сериалы', 'афиша', 'тексты', 'программы и шоуc']
    }

    render() {
        let menuItems = [];
        for (var i = 0; i < this.items.length; i++) {
            menuItems.push(<a href="#" className="menu-item" key={i} >{this.items[i]}</a>);
        }
        return <div className="main-col">
    <div className="info">
        <div className="black-box">
            <img className="frame" src="assets/images/frame.png" />
            <hr/>
            <div className="title">Продюссер:</div>
            <hr/>
            <div className="content">
                Джейсон Стэтхэм, Дональд Сазерленд, Бен Фостер, Тони Голдуин, Джефф Чейз, Мини Анден, Джеймс Логан, Эдди Дж. Фернандез, Джошуа Бриджуотер, Джон МакКоннелл
            </div>
            <div className="title">Режиссер:</div>
            <hr/>
            <div className="content">
                Рене Бессон, Роберт Чартофф, Уильям Чартофф, Роб Кауэн
            </div>
            <div className="title">Сценарист:</div>
            <hr/>
            <div className="content">
                Льюис Джон Карлино, Ричард Уэнк
            </div>
        </div>
    </div>
    <div className="detail film_details_block">
        <div className="white-box bottom-20">
            <div className="short_info_block">
                <div className="details_title ru">МЕХАНИК</div>
                <div className="details_title en">THE MECHANIC</div>
                <div className="item">Год выпуска:</div>
                <div className="value">2010</div>
                <div className="item">Страна</div>
                <div className="value">США</div>
                <div className="item">Жанр</div>
                <div className="value">Боевики, Триллеры, Криминал</div>
                <div className="item">Продолжительность:</div>
                <div className="value">89 мин.</div>
                <div className="item">Рейтинг фильма:</div>
                <div className="value">MDB: 6.5 Кинопоиск: 6.72</div>
                <div className="story_label">Сюжет:</div>
                <div className="story_content">
                    Артур Бишоп очень хорошо знает свое дело. А дело его – убивать. Он наемник, лучший среди лучших. Артур всегда работает один, но ему приходится сотрудничать с молодым парнем. Теперь они команда. Вот только им все равно предстоит вступить в бой друг с другом, из которого хотя бы одному не уйти живым.
                </div>
            </div>
        </div>
        <div className="white-box">
                <img className="video-player" src="assets/images/video-player.png"></img>
            </div>
    </div>
</div>


    }


}

export default Lab1SelectedFilm;
