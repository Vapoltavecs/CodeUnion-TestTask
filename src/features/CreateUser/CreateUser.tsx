import React, { FC, memo, useCallback, useState } from 'react'
import cls from './CreateUser.module.sass'
import { classNames } from '@shared/lib/classNames'
import { IUser } from '@entities/User'
import Input from '@shared/ui/Input'
import ReactSelect, { MultiValue } from 'react-select'
import { permissions as defaultPermissions, Permission } from '@shared/lib/constants'
import Button from '@shared/ui/Button'
import { validateEmail } from '@shared/lib/validateEmail'
import User from "@app/assets/icons/User.svg"

type CreateUserProps = {
    className?: string,
    onCreate: (user: IUser) => void,
    users: IUser[]
}

export const CreateUser: FC<CreateUserProps> = memo(({ className, onCreate, users }) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState<string>()
    const [permissions, setPermissions] = useState<MultiValue<Permission>>([])

    const changeHandler = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [])

    const onSelect = useCallback((value: MultiValue<Permission>) => {
        setPermissions(value)
    }, [])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = validateEmail(email)
        const isExist = users.find(user => user.email === email) // В реальном проекте эта проверка была бы на бэкэнде и прокидывать users в пропсы не понадобилось бы 
        if(isExist){
            setError("Пользователь с таким email уже существует")
            return
        }

        if(isValid){
            setError(undefined)
            onCreate({
                email,
                permissions: permissions.map(permission => permission.label),
                image: User,
                name: "Пользователь"
            })
        }else{
            setError("Некорректный email")
        }
    }
    
    return (
        <form className={classNames(cls.CreateUser, {}, [className])} onSubmit={onSubmit}>
            <div className={cls.CreateUser__title}>Отправьте приглашение</div>
            <Input onChange={changeHandler} value={email} placeholder="Email" className={cls.CreateUser__input} inputClass={cls.input}/>
            <div className={cls.CreateUser__error}>{error && error}</div>
            <ReactSelect onChange={onSelect} options={defaultPermissions} isMulti className={cls.CreateUser__input} placeholder="Выберите права доступа" styles={{
                indicatorSeparator: () => ({
                    display: "none"
                }),
                control: (baseStyles) => ({
                    ...baseStyles,
                    borderRadius: "10px",
                    border: "1px solid var(--light-gray-color)",
                    padding: "11px 10px"
                }),
                placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "var(--gray-color)",
                    fontWeight: 400
                })
            }} />
            <Button type='submit' className={cls.CreateUser__button}>Отправить приглашение</Button>
        </form>
    )
})