import React from 'react'
// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"

function Cont_left() {
  return (
    <section className="cont_left cont">
      <h3 className="ir_su">왼쪽</h3>
      <article className="column col1">
        <h4 className="col_tit">Menu</h4>
        <p className="col_desc">Box-shadow를 이용한 마우스 오버 효과 메뉴입니다</p>
        <div className="menu">
          <ul>
            <li><a href="#" onClick={e => e.preventDefault()}>Cafe <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>tutorial <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>Website <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>reference <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>css3 <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>html5 <FontAwesomeIcon className='dicon' icon={faAngleDoubleRight}/></a></li>
          </ul>
        </div>
      </article>
      <article className="column col2">
        <h4 className="col_tit">Notice</h4>
        <p className="col_desc">게시판 영역의 한줄 효과와 두줄 효과 게시판입니다.</p>
        <div className="noti1">
          <h5>Notice1</h5>
          <ul>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
          </ul>
          <a href="#" onClick={e => e.preventDefault()} className="more" title="더 보기">more <FontAwesomeIcon className="pcion" icon={faPlusCircle}/></a>
        </div>
        <div className="noti2 mt15">
          <h5>Notice2</h5>
          <ul>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다. 이 줄은 한 줄 효과입니다.</a></li>
          </ul>
          <a href="#" onClick={e => e.preventDefault()} className="more" title="더 보기">more <FontAwesomeIcon className="pcion" icon={faPlusCircle}/></a>
        </div>
      </article>
      <article className="column col3">
        <h4 className="col_tit">Blog</h4>
        <p className="col_desc">해상도에 따라 이미지를 다르게 표현하는 방법입니다.</p>
        <div className="blog1">
          <h5 className="ir_su">image1</h5>
          <figure>
            <img src={process.env.PUBLIC_URL + './img/blog1_@2.jpg'}/>
            <figcaption>
              반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다.
            </figcaption>
          </figure>
        </div>
        <div className="blog2">
          <h5 className="ir_su">image2</h5>
          <figure>
            <img src={process.env.PUBLIC_URL + './img/blog2_@1.jpg'}/>
            <figcaption>
              반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다.
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  )
}

export default Cont_left