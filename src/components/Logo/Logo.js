import React from 'react'
import './Logo.css'
import Sbrain from './Sbrain.png'
import Tilt from 'react-parallax-tilt'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{max : 55}} style={{height: '130px'}}>
                <div className='Tilt-inner pa3'>
                    {/* <h1>React Parallax Tilt 👀</h1> */}
                    <img style={{paddingTop:'5px'}} src={Sbrain} alt='logo'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
