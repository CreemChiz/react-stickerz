import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className = 'hero-container'>
            <video src = "/src/videos/video-2.mp4" autoPlay loop muted />
            <h1>Sketch Sketch</h1>
            <p>Penis</p>
            <div className = 'hero-btns'>
                <Button 
                className = 'btns'
                buttonStyle ='btn--outline'
                buttonSize = 'btn--large'>
                    BREAK 'EM
                </Button>
                <Button 
                className = 'btns'
                buttonStyle ='btn--primary'
                buttonSize = 'btn--large'>
                    WATCH VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection