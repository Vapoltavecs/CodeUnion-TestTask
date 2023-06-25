import React, { FC, useCallback, useState } from 'react'
import cls from './UserItem.module.sass'
import { classNames } from '@shared/lib/classNames'
import { IUser } from '@entities/User'
import { ReactComponent as Elipsis } from "@app/assets/icons/Elipsis.svg"
import { UserContextMenu } from '../UserContextMenu/UserContextMenu'
import { UserPermissionsMenu } from '../UserPermissionsMenu/UserPermissionsMenu'

type UserItemProps = {
    className?: string,
    onDelete: (user: IUser) => void,
    onChangePermissions: (email: string, newPermissions: string[]) => void
} & IUser

export const UserItem: FC<UserItemProps> = React.memo(({ className, name, permissions, image, email, onDelete, onChangePermissions }) => {
    const [contextMenuShowed, setContextMenuShowed] = useState(false)
    const [accessRights, setAccessRights] = useState(false)

    const openContextMenu = () => setContextMenuShowed(true)
    const closeContextMenu = useCallback(() => setContextMenuShowed(false), [])
    const openPermissionsMenu = useCallback(() => {
        closeContextMenu()
        setAccessRights(true)
    }, [])
    const closePermissionsMenu = useCallback(() => setAccessRights(false), [])

    const deleteUser = () => {
        onDelete({
            name,
            permissions,
            image,
            email
        })
    }

    const changePermissions = onChangePermissions.bind(null, email)

    return (
        <div className={classNames(cls.user, {}, [className])}>
            <div className={classNames(cls.user__profile, {}, [cls.profile])}>
                <div>
                    <img alt='avatar' src={image} className={cls.profile__avatar} />
                </div>
                <div className={cls.user__info}>
                    <div className={cls.profile__header}>
                        <span className={cls.profile__name}>{name}</span>
                        <span className={cls.profile__email}>{email}</span>
                    </div>
                    <ul className={cls.user__permissions}>{permissions.length > 0 ? permissions.sort((a, b) => a.length - b.length).map(permission => <li key={permission} className={classNames(cls.user__permission, { [cls.admin]: permission === "Администратор" })}>{permission}</li>) : "У пользователя прав доступа"}</ul>
                </div>
            </div>
            <div className={cls.menu}>
                <button className={cls.menu__button} onClick={openContextMenu}><Elipsis /></button>
                <UserContextMenu opened={contextMenuShowed} editUser={openPermissionsMenu} onClose={closeContextMenu} deleteUser={deleteUser} />
                <UserPermissionsMenu onChangePermissions={changePermissions} permissions={permissions} opened={accessRights} onClose={closePermissionsMenu} />
            </div>
        </div>
    )
})