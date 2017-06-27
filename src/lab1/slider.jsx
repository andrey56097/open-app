import React from 'react';

import Lab1Ratings from './ratings.jsx';

class Lab1Sliser extends React.Component {

    constructor(props) {
        super(props);
        var vm = this;
        var interval = 6000;
        var timeoutObj = null;
        this.items = ['Тест1', 'Тест2', 'Тест3'];
        this.activeIndex = 0;

        var switchNext = function() {
            switchTo(vm.activeIndex + 1);
        }
        var switchPrevious = function() {
            switchTo(vm.activeIndex - 1);
        }
        var switchTo = function(index) {
            console.log(index);
            clearTimeout(timeoutObj)
            if (index < 0) {
                index = vm.items.length - 1;
            }
            if (index >= vm.items.length) {
                index = 0;
            }
            vm.activeIndex = index;
            vm.forceUpdate();
            timeoutObj = setTimeout(switchNext, interval);
        }

        timeoutObj = setTimeout(switchNext, interval);
        this.switchPrevious = switchPrevious.bind(this);
        this.switchNext = switchNext.bind(this);
        this.switchTo = switchTo;
    }

    render() {
        let sliderItems = [];
        let clipsItems = [];
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            clipsItems.push(
                <div key={i} className={'clips-item ' + (this.activeIndex === i ? 'active' : '')} onClick={this.switchTo.bind(this, i)} style={{'backgroundImage' : 'url(assets/images/slider_item.png)'}}>
            </div>
            );
            sliderItems.push(
                <div key={i} className={'slider-item ' + (this.activeIndex === i ? 'active' : '')}>
                <div style={{'backgroundImage': 'url(assets/images/slider_item.png)'}} className="img"></div>
                <div className="slider-description">
                    <div className="info">
                        <div className="dich top-r right"></div>
                        <div className="dich left-r"></div>

                        <div className="title-translate">{item}</div>
                        <div className="titles-origin">{item}: Europes Most Wanted</div>
                        <div className="date">
                            <div className="day-container">
                                <div className="day-num">0</div>
                                <div className="day-num">7</div>
                            </div>
                            <div className="status">на сайті з</div>
                            <div className="month">квітня</div>
                        </div>
                        <Lab1Ratings/>
                        <div className="text">
                            Бегемотиха Глория, жираф Мелман, зебра Марти и, конечно, лев Алекс решают вернуться в Нью-Йорк после их побега в Африку. Из-за механических инновации пресловутого шимпанзе и сумасшедших пингвинов, весь план рушится. 
                        </div>
                    </div>
                   
                </div>
            </div>
            );
        }
        return <div className="slider-content">
            <div className="slider-btn prev" onClick={this.switchPrevious}></div>
            {sliderItems}
             <div className="clips">
             {clipsItems}
            </div>
            <img className="dich_slider" src="assets/images/dich_slider.png" />
            <div className="slider-btn next" onClick={this.switchNext}></div>
        </div>
    }


}

export default Lab1Sliser;
