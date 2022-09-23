import React from 'react'
import '../scss/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="fo">
          <ul>
            <li><a href="#" onClick={e => e.preventDefault()}>사이트 도움말</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>사이트 이용약관</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>사이트 운영원칙</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}><strong>개인정보취급방침</strong></a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>책임의 한계와 법적고지</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>게시중단요청서비스</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>고객센터</a></li>
          </ul>
          <address>
            Copyright ©
            <a href="http://webstoryboy.co.kr"><strong>webstoryboy</strong></a>
            All Rights Reserved.
          </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer