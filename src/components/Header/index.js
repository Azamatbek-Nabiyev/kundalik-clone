import React from 'react';
import './style.css';
import logo from '../../assets/logo.png';

export default () => {
  return (
    <nav>
        <div className='top_colors'>
            <span className='color1'></span>
            <span className='color2'></span>
            <span className='color3'></span>
            <span className='color4'></span>
            <span className='color5'></span>
        </div>
        <div className='menu'>
            <div className='logo'><img src={logo} /></div>
            <div className='menu-items'>
                <ul>
                    <li>Tashkilot</li>
                    <span>|</span>
                    <li>Imkoniyatlar</li>
                    <span>|</span>
                    <li>Hamkorlarga</li>
                    <span>|</span>
                    <li>Yordam</li>
                </ul>

                <div className='btns'>
                    <button className='enter' >Kirish</button>
                    <button className='ulash' >Tashkilotni ulash</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
