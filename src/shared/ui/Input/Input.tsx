import { FC, InputHTMLAttributes, memo, ReactNode, RefObject } from 'react'
import cls from './Input.module.sass'
import { classNames } from '@shared/lib/classNames'

type InputProps = {
    className?: string,
    icon?: ReactNode,
    inputRef?: RefObject<HTMLInputElement>,
    inputClass?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = memo(({ className, icon,inputRef,inputClass, ...otherProps }) => {
    return <div className={classNames(cls.Input, { [cls.withIcon]: Boolean(icon) }, [className])} ><input ref={inputRef} {...otherProps} className={classNames(cls.Input__input, {}, [inputClass])} /><span className={cls.Input__icon}>{icon}</span></div>
})