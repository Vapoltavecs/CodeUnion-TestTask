import React, { FC, ReactNode } from 'react'
import cls from './Item.module.sass'
import { classNames } from '@shared/lib/classNames'
import { NavLink } from "react-router-dom"

type ItemProps = {
    className?: string
    icon: ReactNode,
    title: string,
    to: string
    menuOpened: boolean
}

export const Item: FC<ItemProps> = React.memo(({ className, icon, title, menuOpened, to }) => {
    return <NavLink to={to} className={(props) => classNames(cls.item, {[cls.active]: props.isActive}, [className])}>{icon} {menuOpened && <span className={classNames(cls.title)}>{title}</span>}</NavLink>
})