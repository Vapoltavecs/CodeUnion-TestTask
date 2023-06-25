import { FC, memo, useRef } from 'react'
import cls from './UserContextMenu.module.sass'
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick'
import { animation } from '../animation'

type UserContextMenuProps = {
    opened: boolean,
    deleteUser: () => void,
    editUser: () => void,
    onClose: () => void
}

export const UserContextMenu: FC<UserContextMenuProps> = memo(({ opened, deleteUser, editUser, onClose }) => {
    const contextMenuRef = useRef<HTMLUListElement>(null)
    useOutsideClick(contextMenuRef, () => onClose())


    return (
        <AnimatePresence>
            {opened &&
                <motion.ul ref={contextMenuRef} {...animation} className={cls.menu}>
                    <li><button onClick={editUser}>Изменить права доступа</button></li>
                    <li><button>Отправить код повторно</button></li>
                    <li><button onClick={deleteUser}>Удалить</button></li>
                </motion.ul>}
        </AnimatePresence>
    )
})