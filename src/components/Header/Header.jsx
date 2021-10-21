import React from 'react'
import './header.css'

const Header = (props) => {
  // if (!props.show) return null;
  return (
    <div className='header__wrapper'>
      <p> Album example </p>
      {/* {props.tags.map(tag => <p>{tag}</p>)}  */}
      <p>
        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
      </p>
      {props.isButtonsShown && (
        <div>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
        </div>
      )}
    </div>
  )
}

export default Header