import { FC, memo } from 'react'
import cls from './FullPageLoader.module.sass'
import { classNames } from '@shared/lib/classNames'
import { Loader } from '../Loader/Loader'

type FullPageLoaderProps = {
    className?: string
}

export const FullPageLoader:FC<FullPageLoaderProps> = memo(({className}) => {
    return <div className={classNames(cls.FullPageLoader, {}, [className])}><Loader /></div>
})