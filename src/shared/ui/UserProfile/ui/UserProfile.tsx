import React, { FC } from 'react'
import cls from './UserProfile.module.sass'
import { classNames } from '@shared/lib/classNames'

type UserProfileProps = {
    className?: string,
    withName: boolean,
    avatar: string,
    name: string,
    role: string
}

export const UserProfile: FC<UserProfileProps> = React.memo(({ className, avatar, withName, name, role }) => {
    return (
        <div className={classNames(cls.UserProfile, {}, [className])}>
            <img src={avatar} className={cls.UserProfile__avatar} alt="avatar" />
            {withName && <div className={cls.UserProfile__info}><div className={cls.UserProfile__name}>{name}</div><div className={cls.UserProfile__role}>{role}</div></div>}
        </div>
    )
})