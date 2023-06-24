import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.sass'
import { classNames } from '@shared/lib/classNames'

type ButtonProps = {
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:FC<ButtonProps> = ({className, children, ...otherProps}) => {
    return <button className={classNames(cls.Button, {}, [className])} {...otherProps}>{children}</button>
}