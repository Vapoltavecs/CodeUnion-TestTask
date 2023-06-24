import React, { FC, ReactNode } from 'react'
import cls from './item.module.sass'
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
    return <NavLink to={to} className={(props) => classNames(cls.item, {[cls.open]: menuOpened, [cls.active]: props.isActive}, [className])}>{icon} <span className={classNames(cls.title)}>{title}</span></NavLink>
})