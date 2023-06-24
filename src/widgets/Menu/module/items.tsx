import { ReactNode } from 'react';
import cls from "../ui/item/Item.module.sass"

import { ReactComponent as Analytics } from "@app/assets/icons/Analytics.svg"
import { ReactComponent as Profile } from "@app/assets/icons/Profile.svg"
import { ReactComponent as Chats } from "@app/assets/icons/Chats.svg"
import { ReactComponent as Currencies } from "@app/assets/icons/Currencies.svg"
import { ReactComponent as Documents } from "@app/assets/icons/Documents.svg"
import { ReactComponent as Exit } from "@app/assets/icons/Exit.svg"
import { ReactComponent as Images } from "@app/assets/icons/Images.svg"
import { ReactComponent as Team } from "@app/assets/icons/Team.svg"
import { ReactComponent as Todos } from "@app/assets/icons/Todos.svg"

type MenuItem = {
    to: string,
    icon: ReactNode,
    title: string
}

export const menuItems:MenuItem[] = [
    {
        to: "/analytics",
        icon: <Analytics/>,
        title: "Аналитика"
    },
    {
        to: "/profile",
        icon: <Profile/>,
        title: "Профиль"
    },
    {
        to: "/moderation",
        icon: <Todos/>,
        title: "Модерация"
    },
    {
        to: "/chats",
        icon: <Chats/>,
        title: "Чаты"
    },
    {
        to: "/images",
        icon: <Images/>,
        title: "Баннеры"
    },
    {
        to: "/",
        icon: <Team/>,
        title: "Команда"
    },
    {
        to: "/blog",
        icon: <Documents />,
        title: "Блог"
    },
    
    {
        to: "/currencies",
        icon: <Currencies className={cls.icon}/>,
        title: "Курс валют"
    },
    
]