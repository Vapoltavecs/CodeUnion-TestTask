import { FC, InputHTMLAttributes } from 'react'
import cls from './Checkbox.module.sass'
import { classNames } from '@shared/lib/classNames'

type CheckboxProps = {
    className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox:FC<CheckboxProps> = ({className, ...otherProps}) => {
    return <div className={classNames(cls.Checkbox, {}, [className])}>Checkbox</div>
}