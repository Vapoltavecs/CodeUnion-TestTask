import { FC, ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import cls from './Modal.module.sass'
import { classNames } from '@shared/lib/classNames'
import { motion, AnimatePresence } from 'framer-motion'

const DURATION = .3

const modalContainer = document.querySelector(".modal") as HTMLDivElement
const body = document.querySelector("body") as HTMLBodyElement

type ModalProps = {
    className?: string,
    isOpened: boolean,
    onClose: () => void,
    children: ReactNode,
}


const Modal: FC<ModalProps> = ({ className, children, isOpened, onClose }) => {
    useEffect(() => {
        if(isOpened){
            body.style.overflowY ="hidden"
        }else{
            body.style.overflowY = "auto"
        }
    }, [isOpened])
    return (
        ReactDOM.createPortal((
            <AnimatePresence> 
                {isOpened && <div className={classNames(cls.modal__wrapper, {}, [className])}>
                    <motion.div className={cls.overlay} onClick={onClose} transition={{duration: DURATION}} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}></motion.div>
                    <motion.div className={cls.modal} initial={{opacity: 0, y: "-100%", x: "-50%"}} transition={{duration: DURATION}} animate={{opacity: 1, y: "-50%", x: "-50%"}} exit={{opacity: 0, y: "50%"}}>{children}</motion.div>
                </div>}
            </AnimatePresence>
        ), modalContainer)
    )
}

export default Modal
