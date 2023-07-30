import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/yash-singh-27a071213" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/YashDxr" target="_blank"><BsGithub/></a>
        {/* <a href="https://dribble.com" target="_blank"><BsDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials