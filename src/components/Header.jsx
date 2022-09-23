import '../scss/Header.scss';

// http://www.facebook.com/sharer.php?u={페이지제목}&t={링크}
// http://twitter.com/intent/tweet?text={페이지제목}&url={페이지링크}


function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header">
            <div className="h-menu">
              <a href="#" onClick={e => e.preventDefault()}>Blog</a>
              <a href="#" onClick={e => e.preventDefault()}>Github</a>
              <a href="#" onClick={e => e.preventDefault()}>Webstandard</a>
            </div>
            <div className="h-title">
              <h1>Web Publihser</h1><br/>
              <a href="#" onClick={e => e.preventDefault()}>heywon protfolio</a>
            </div>
            <div className="h-icon">
              <ul>
                <li>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <i className="fa-brands fa-html5"></i><span>HTML5</span></a>
                </li>
                <li>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-github"></i><span>Github</span></a>
                </li>
                <li>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-square-facebook"></i><span>Facebook</span></a>
                </li>
                <li>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-twitter"></i><span>twitter</span></a>
                </li>
              </ul>
            </div>
            {/* metatag */}
            {/* https://developers.facebook.com/tools/debug/ */}
            {/* https://cards-dev.twitter.com/validator */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header