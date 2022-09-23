import React, {useState} from 'react';
import '../scss/Navbar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons"
import $ from 'jquery'


function Navbar() {

  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow(!arrow);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="nav">
              <h2 className="ir_su">반응형 사이트 전체 메뉴</h2>
              <div>
                <h3>HTML Reference</h3>
                <ol>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML 태그(Tag)</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>블록 요소/인라인 요소</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>DTD 선언</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>언어 속성 설정</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;title&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;meta&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>특수문자</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>하이퍼 링크</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;style&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;html&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;head&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;div&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;colgroup&gt;</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>HTML &lt;caption&gt;</a></li>
                </ol>
              </div>
              <div>
                <h3>CSS Reference</h3>
                <ol>
                  <li><a href="#" onClick={e => e.preventDefault()}>CSS 선택자</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>CSS 단위</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>CSS 색상</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>CSS 선언 방법</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>상대주소와 절대주소</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>CSS float</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>이미지 표현 방법</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>이미지 스프라이트</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>IR 효과</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>이미지 최적화</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>background-color</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>border-style</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>font-size</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>text-align</a></li>
                </ol>
              </div>
              <div>
                <h3>Webstandard</h3>
                <ol>
                  <li><a href="#" onClick={e => e.preventDefault()}>웹 표준</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>웹 접근성</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>W3C</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>웹 접근성 연구소</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>네이버 널리</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>다음 다룸</a></li>
                  <li><a href="#" onClick={e => e.preventDefault()}>Webstandard</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <article className="sub-title">
        <div className="container">
          <div className="title">
            <h2>"나는 퍼블리셔다"</h2>
            <button className="btn" onClick={(e) => {
              e.preventDefault();
              $(".nav").slideToggle();
              handleArrow()

            }}>
              {arrow ? (
                <FontAwesomeIcon className='icd' icon={faChevronUp}/>
              ) : (
                <FontAwesomeIcon className='icd' icon={faChevronDown}/>
              )}
             
            </button>
            <span className="ir_su">전체메뉴 보기</span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Navbar