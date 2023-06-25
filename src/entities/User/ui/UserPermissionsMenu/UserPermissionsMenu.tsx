import { FC, memo, useCallback, useMemo, useRef } from 'react'
import cls from './UserPermissionsMenu.module.sass'
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick'
import { animation } from '../animation'
import { permissions } from '@shared/lib/constants'
import Checkbox from '@shared/ui/Checkbox'
import { isArrayEqual } from '@shared/lib/isArrayEqual'

type UserPermissionsMenuProps = {
    opened: boolean,
    onClose: () => void,
    permissions: string[],
    onChangePermissions: (newPermissions: string[]) => void
}

export const UserPermissionsMenu: FC<UserPermissionsMenuProps> = memo(({ opened, onClose, permissions: userPermissions, onChangePermissions }) => {
    const menuRef = useRef(null)
    useOutsideClick(menuRef, onClose)

    const changeHandler = useCallback((label: string, checked: boolean) => {
        let perm = [...userPermissions]

        if (checked) {
            perm.push(label)
        } else {
            perm = perm.filter(p => p !== label)
        }
        onChangePermissions(perm)
    }, [userPermissions])

    const isAllSelected = useMemo(() => isArrayEqual(permissions.map(p => p.label), userPermissions), [userPermissions])

    const selectAll = useCallback((_: string, checked:boolean) => {
        if(checked){
            onChangePermissions(permissions.map(p => p.label))
        }
        else{
            onChangePermissions([])
        }
    }, [userPermissions])

    return (
        <AnimatePresence>
            {opened && (
                <motion.ul {...animation} ref={menuRef} className={cls.menu}>
                    <li><Checkbox label="Все" onChangeChecked={selectAll} checked={isAllSelected}/></li>
                    {permissions.map(permission => <li key={permission.label}><Checkbox checked={userPermissions.includes(permission.label)} label={permission.label}  onChangeChecked={changeHandler} /></li>)}
                </motion.ul>
            )}
        </AnimatePresence>
    )
})