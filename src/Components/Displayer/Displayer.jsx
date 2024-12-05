import React, { useEffect, useRef } from 'react'
import "./displayer.css"
const Displayer = ({musicUrl, play}) => {
    const audioRef = useRef(null);
    useEffect(() =>{
        if(play !== 0){
            // Play music
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }, [musicUrl, play])
    
    return (
        <div id="display">
            <audio ref={audioRef} src={musicUrl && musicUrl[1]} />
            <p className='title'>{musicUrl && musicUrl[0]}</p>
        </div>
    )
}

export default Displayer
