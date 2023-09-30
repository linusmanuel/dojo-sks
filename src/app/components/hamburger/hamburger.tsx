'use client'
import './style.css'

export default function Hamburger({props}: any) {

  return (
    <button className="c-btn--hamburger" onClick={props}>
      <span className="c-btn--hamburger__line"></span>
      <span className="c-btn--hamburger__line"></span>
      <span className="c-btn--hamburger__line"></span>
		</button>
  )
}
