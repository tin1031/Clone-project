import React from 'react'
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LightGallery from 'lightgallery/react';
// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

function Cont_center() {
  
  const settings = {
    dots: true,
    infinite:true,
    speed:2500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    autoplay:true,
    prevArrow:<FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow:<FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint:768,
        settings: {
          dots:false
        }
      }
    ]
  }

  const onInit = () =>{
    console.log('lightGallery has been initialized');
  }


  return (
    <section className="cont_center">
      <h3 className="ir_su">가운데</h3>
      <article className="column col4">
        <h4 className="col_tit">Slick Slider</h4>
        <p className="col_desc">Slick.js를 이용한 이미지 슬라이드 효과입니다.</p>
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <figure>
                <img src={process.env.PUBLIC_URL + './img/slider001.jpg'} alt="#" onClick={e => e.preventDefault()} />
                <figcaption>
                  <em>Responsive Site1</em>
                  <span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span>
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={process.env.PUBLIC_URL + './img/slider001.jpg'} alt="#" onClick={e => e.preventDefault()} />
                <figcaption><em>Responsive Site2</em><span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span></figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={process.env.PUBLIC_URL + './img/slider001.jpg'} alt="#" onClick={e => e.preventDefault()} />
                <figcaption><em>Responsive Site3</em><span>슬라이드 플러그인을 이용한 반응형 이미지 슬라이드입니다.</span></figcaption>
              </figure>
            </div>
          </Slider>
          
        </div>
      </article>
      <article className="column col5">
        <h4 className="col_tit">Filter Effect</h4>
        <p className="col_desc">CSS3에서는 Background-blend-mode, mix-blend-mode, filter와 같이 포토샵에서 다루는 효과들이 있습니다.</p>
        <div className="lightbox square clearfix">
          <LightGallery
          onInit={onInit} speed={500} plugins={[lgZoom]} mode="lg-fade">
            <a href="./img/light01_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light01.jpg'} />
              <span>blur</span>
            </a>
            <a href="./img/light02_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light02.jpg'} />
              <span>brightness</span>
            </a>
            <a href="./img/light03_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light03.jpg'} />
              <span>contrast</span>
            </a>
            <a href="./img/light04_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light04.jpg'} />
              <span>grayscale</span>
            </a>
            <a href="./img/light05_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light05.jpg'} />
              <span>hur-rotate</span>
            </a>
            <a href="./img/light06_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light06.jpg'} />
              <span>invert</span>
            </a>
            <a href="./img/light07_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light07.jpg'} />
              <span>opacity</span>
            </a>
            <a href="./img/light08_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light08.jpg'} />
              <span>saturate</span>
            </a>
            <a href="./img/light09_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light09.jpg'} />
              <span>sepia</span>
            </a>
            <a href="./img/light10_s.jpg">
              <img src={process.env.PUBLIC_URL + './img/light10.jpg'} />
              <span>Mix</span>
            </a>
          </LightGallery>
        </div>
      </article>
      <article className="column col6">
        <h4 className="col_tit">Video</h4>
        <p className="col_desc">반응형 영상을 보여주는 영역입니다.</p>
        <ReactPlayer className="player" url={"https://www.youtube.com/watch?v=4GqnbAltxMU&list=PL4UVBBIc6giL7ygRa-P7UExEKqZgx4t9K&index=30"} width="100%" controls={true}/>
      </article>
    </section>
  )
}

export default Cont_center