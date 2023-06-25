import { FC, memo, useContext } from 'react'
import cls from './Menu.module.sass'
import { classNames } from '@shared/lib/classNames'
import { AppContext } from '@app/providers/AppProvider'
import { Item } from '../item/Item'
import { ReactComponent as Logo } from "@app/assets/icons/logo.svg"
import UserProfile from '@shared/ui/UserProfile'
import { NavLink } from "react-router-dom"
import { menuItems } from '@widgets/Menu/module/items'
import { useWindowResize } from '@shared/lib/hooks/useWindowResize'
import { ReactComponent as Burger } from "@app/assets/icons/Burger.svg"
import Avatar from "@app/assets/icons/Avatar.svg"

type MenuProps = {
    className?: string,
}

export const Menu: FC<MenuProps> = memo(({ className }) => {
    const { menu } = useContext(AppContext)
    const { width } = useWindowResize()
    const showFullVersion = width > 900

    const closeMenu = () => menu.setValue(false)
    return (
        <nav className={classNames(cls.Menu, { [cls.open]: menu.value }, [className])}>
            {showFullVersion && <NavLink to="/"><Logo className={cls.logo} /></NavLink>}
            {!showFullVersion && <button onClick={closeMenu} className={cls.Menu__burger}><Burger /></button>}
            <UserProfile role='Собственник' avatar={Avatar} withName={!showFullVersion} name="Артем Иванов" className={cls.Menu__user} />
            <ul className={classNames(cls.Menu__list)}>
                {menuItems.map(item => <li key={item.title}><Item {...item} menuOpened={!showFullVersion} /></li>)}
            </ul>
        </nav>
    )
})