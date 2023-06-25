import { FC } from 'react'
import cls from './NotFound.module.sass'
import { classNames } from '@shared/lib/classNames'
import { NavLink } from 'react-router-dom'

const NotFound: FC = () => {
    return <div className={classNames(cls.NotFound)}><div>Страница не найдена</div><NavLink to="/">На главную</NavLink></div>
}

export default NotFound