import { FC, FormEvent, InputHTMLAttributes, memo } from 'react'
import cls from './Checkbox.module.sass'
import { classNames } from '@shared/lib/classNames'

type CheckboxProps = {
    className?: string,
    label: string,
    onChangeChecked: (label: string, checked: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<CheckboxProps> = memo(({ className, label, onChangeChecked, ...otherProps }) => {
    const changeHandler = (e:FormEvent<HTMLInputElement>) => onChangeChecked(label, e.currentTarget.checked)
    return (
        <div className={cls.container}>
            <input onChange={changeHandler} className={classNames(cls.Checkbox, {}, [className])} {...otherProps} type="checkbox" id={label} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
})