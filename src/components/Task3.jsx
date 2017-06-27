
import React, { Component } from 'react';
import './Task3.css';


class Task3 extends Component {
    constructor(props) {
        super(props);
        setTimeout(function () {
            var slides = document.querySelector('.slides');

            function initSlides() {
                const activeSlide = document.querySelector('.slide:first-child');
                const nextSlide = document.querySelector('.slide:nth-child(2)');
                const prevSlide = document.querySelector('.slide:last-child');

                activeSlide.classList.add('active');
                nextSlide.classList.add('on-right');
                prevSlide.classList.add('on-left')
            }

            function slideLeft() {
                const activeSlide = document.querySelector('.slide.active');
                const nextSlide = document.querySelector('.slide.on-right');
                const prevSlide = document.querySelector('.slide.on-left');

                activeSlide.classList.remove('active');
                activeSlide.classList.add('on-right');
                prevSlide.classList.remove('on-left');
                prevSlide.classList.add('active');
                nextSlide.classList.remove('on-right');
                nextSlide.classList.add('on-left');
            }

            function slideRight() {
                const activeSlide = document.querySelector('.slide.active');
                const nextSlide = document.querySelector('.slide.on-right');
                const prevSlide = document.querySelector('.slide.on-left');

                activeSlide.classList.remove('active');
                activeSlide.classList.add('on-left');
                nextSlide.classList.remove('on-right');
                nextSlide.classList.add('active');
                prevSlide.classList.remove('on-left');
                prevSlide.classList.add('on-right');
            }

            document.querySelector('.button-left').addEventListener('click', slideLeft);
            document.querySelector('.button-right').addEventListener('click', slideRight);

            initSlides();
        }, 0);
    }




    render() {
        return (
            <div className="slider">
                <div className="slides">
                    <div className="slide"><img src={require("../images/slide-image-1.jpg")} alt="" /></div>
                    <div className="slide"><img src={require("../images/slide-image-2.jpg")} alt="" /></div>
                    <div className="slide"><img src={require("../images/slide-image-3.jpg")} alt="" /></div>
                </div>

                <div className="buttons">
                    <div className="button-left">&lt;</div>
                    <div className="button-right">&gt;</div>
                </div>

                

               
            </div>
           
        );
    }
}

export default Task3;