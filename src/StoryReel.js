import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://source.unsplash.com/random"
                profileSrc="https://source.unsplash.com/random?man"
                title="BOSS"
            />
            <Story 
                image="https://source.unsplash.com/random?water"
                profileSrc="https://source.unsplash.com/random?human"
                title="BOSS 1"
            />
            <Story 
                image="https://source.unsplash.com/random?dogs"
                profileSrc="https://source.unsplash.com/random?nature"
                title="BOSS 2"
            />
            <Story 
                image="https://source.unsplash.com/random?pc"
                profileSrc="https://source.unsplash.com/random?woman"
                title="BOSS 3"
            />
            <Story 
                image="https://source.unsplash.com/random?people"
                profileSrc="https://source.unsplash.com/random?rain"
                title="BOSS 4"
            />
            <Story 
                image="https://source.unsplash.com/random?fog"
                profileSrc="https://source.unsplash.com/random"
                title="BOSS 5"
            />
           
        </div>
    );
}

export default StoryReel;
