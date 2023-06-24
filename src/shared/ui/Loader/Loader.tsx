import { FC } from 'react'
import cls from './Loader.module.sass'
import { classNames } from '@shared/lib/classNames'

type LoaderProps = {
    className?: string
}

export const Loader:FC<LoaderProps> = ({className}) => {
    return <span className={classNames(cls.loader, {}, [className])}></span>
}