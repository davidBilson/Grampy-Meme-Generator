import React, { useEffect, useState } from 'react'

const WindowTracker = () => {
    const [show, setShow] = useState(true)

    const handleTrack = () => {
        setShow(prevShow => (!prevShow))
    }
    const [windowWidth, setWindowWidth ] =  useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
        return () => window.removeEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    }, [windowWidth])

  return (
    <div>
        <button onClick={handleTrack}>Toggle Window Tracker</button>
        <div>{show && `Window width: ${windowWidth}`}</div>
    </div>
  )
}

export default WindowTracker