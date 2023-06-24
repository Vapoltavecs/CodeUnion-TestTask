import { FC, useRef } from 'react'
import cls from './UserPermissionsMenu.module.sass'
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick'
import { animation } from '../animation'

type UserPermissionsMenuProps = {
    opened: boolean,
    onClose: () => void
}

export const UserPermissionsMenu: FC<UserPermissionsMenuProps> = ({ opened, onClose }) => {
    const menuRef = useRef(null)
    useOutsideClick(menuRef, onClose)
    return (
        <AnimatePresence>
            {opened && (
                <motion.div {...animation} ref={menuRef} className={cls.menu}>
                    menu
                </motion.div>
            )}
        </AnimatePresence>
    )
}