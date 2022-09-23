import React from 'react'
import '../scss/Contents.scss'
import Cont_left from './Cont_left';
import Cont_center from './Cont_center';
import Cont_right from './Cont_right';

function Contents() {
  
  
  return (
    <main>
      <section className="contents">
        <div className="container">
          <h2 className="ir_su">반응형 사이드</h2>
          <Cont_left/>
          <Cont_center/>
          <Cont_right/>
        </div>
      </section>
    </main>
  )
}

export default Contents