import { useState, useEffect } from 'react';
type Window = {
    width: number,
    height: number
}

export const useWindowResize = (defaultValue: Window = { width: window.innerWidth, height: window.innerHeight }): Window => {
    const [sizes, setSizes] = useState<Window>(defaultValue)

    useEffect(() => {
        const resizeHandler = () => setSizes({ width: window.innerWidth, height: window.innerHeight })
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [])

    return sizes
}