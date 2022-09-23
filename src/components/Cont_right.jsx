import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-solid-svg-icons"

function Cont_right() {
  return (
    <section className="cont_right cont">
      <h3 className="ir_su">오른쪽</h3>
      <article className="column col7">
        <h4 className="col_tit">Effect1</h4>
        <p className="col_desc">CSS3의 transform을 이용한 마우스 오버효과입니다.</p>
        <div className="side1">
          <div className="front">
            <img src={process.env.PUBLIC_URL + './img/side1.jpg'} alt="#" onClick={e => e.preventDefault()} />
          </div>
          <div className="back"><FontAwesomeIcon className="hicon" icon={faHeart}/></div>
        </div>
      </article>
      <article className="column col8">
        <h4 className="col_tit">Effect2</h4>
        <p className="col_desc">CSS3의 transform을 이용한 마우스 오버효과입니다.</p>
        <div className="side2">
          <figure className='front'>
            <img src={process.env.PUBLIC_URL + './img/side2.jpg'} alt="#" onClick={e => e.preventDefault()} />
            <figcaption>
              Hover Effect
            </figcaption>
          </figure>
          <figure className='back'>
            <img src={process.env.PUBLIC_URL + './img/side4.jpg'} alt="#" onClick={e => e.preventDefault()} />
            <figcaption>
              Hover Effect
            </figcaption>
          </figure>
        </div>
      </article>
      <article className="column col9">
        <h4 className="col_tit">Effect3</h4>
        <p className="col_desc">CSS3의 transform을 이용한 마우스 오버효과입니다.</p>
        <div className="side3">
          <figure>
            <img src={process.env.PUBLIC_URL + './img/side3.jpg'} alt="#" onClick={e => e.preventDefault()} />
            <figcaption>
              <h3>Hover<span>Effect</span></h3>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  )
}

export default Cont_right