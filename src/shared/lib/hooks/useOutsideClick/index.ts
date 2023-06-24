import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
    const clickHandler = (event: MouseEvent) => {
        const el = ref?.current

        if (!el || el.contains(event.target as Node)) {
            return
        }

        handler(event)
    }
    useEffect(() => {
        window.addEventListener(mouseEvent, clickHandler)
        return () => window.removeEventListener(mouseEvent, clickHandler)
    }, [])

}