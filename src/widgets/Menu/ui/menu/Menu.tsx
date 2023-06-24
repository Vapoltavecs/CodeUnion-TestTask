import { FC, useContext } from 'react'
import cls from './Menu.module.sass'
import { classNames } from '@shared/lib/classNames'
import { AppContext } from '@app/providers/AppProvider'
import { Item } from '../item/item'

import { ReactComponent as Logo } from "@app/assets/icons/logo.svg"
import UserProfile from '@shared/ui/UserProfile'
import { NavLink } from "react-router-dom"
import { menuItems } from '@widgets/Menu/module/items'

type MenuProps = {
    className?: string
}

export const Menu: FC<MenuProps> = ({ className }) => {
    const { menu } = useContext(AppContext)

    return (
        <nav className={classNames(cls.Menu, { [cls.open]: menu.value }, [className])}>
            <NavLink to="/"><Logo className={cls.logo} /></NavLink>
            <UserProfile avatar={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg"} withName={menu.value} name="viacheslav" />
            <ul className={classNames(cls.Menu__list)}>
                {menuItems.map(item => <li key={item.title}><Item {...item} menuOpened={menu.value} /></li>)}
            </ul>
        </nav>
    )
}