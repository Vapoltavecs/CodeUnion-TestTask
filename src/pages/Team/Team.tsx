import { FC, useCallback, useState } from 'react'
import cls from './Team.module.sass'
import { classNames } from '@shared/lib/classNames'
import { IUser, useUsers } from '@entities/User'
import Modal from '@shared/ui/Modal'
import Button from '@shared/ui/Button'
import Search from '@widgets/Search'
import { ReactComponent as SearchIcon } from "@app/assets/icons/Search.svg"
import { SearchUsers } from '@features/UsersFilter'
import CreateUser from '@features/CreateUser'

const Team: FC = () => {
    const { users, loading, error, createUser, deleteUser } = useUsers()
    const [createShowed, setCreateShowed] = useState(false)
    const [isSearched, setSearched] = useState(false)
    const [searchedEmail, setSearchedEmail] = useState("")
    const [addedUser, setAddedUser] = useState<IUser>()

    const switchModal = useCallback(() => {
        setAddedUser(undefined)
        setCreateShowed(prev => !prev)
    }, [])

    const closeSearch = useCallback(() => {
        setSearched(false)
    }, [])

    const openSearch = useCallback(() => {
        setSearched(true)
    }, [])

    const onSearch = useCallback((value: string) => {
        setSearchedEmail(value)
    }, [])

    const addUser = useCallback((user: IUser) => {
        createUser(user)
        setAddedUser(user)
    }, [])

    return (
        <div className={classNames(cls.Team)}>
            <div className={cls.Team__header}>
                <h1 className={cls.Team__title}>Команда</h1>
                <div className={cls.Team__controllers}>
                    {isSearched ? <Search className={cls.Team__search} onOutsideClick={closeSearch} searchValue={searchedEmail} onSearch={onSearch} focusOnInit /> : <SearchIcon onClick={openSearch} className={cls.Team__icon} />}
                    <Button onClick={switchModal} className={cls.Team__button}>Добавить пользователя</Button>
                </div>
            </div>
            <SearchUsers deleteUser={deleteUser} searchedEmail={searchedEmail} users={users} className={cls.Team__list} loading={loading} error={error} />
            <Modal isOpened={createShowed} onClose={switchModal}>
                {!addedUser && <CreateUser users={users} onCreate={addUser} />}
                {addedUser &&
                    <div className={cls.success}>
                        <div className={cls.success__content}>Приглашение отрпавлено на почту <br /> {addedUser.email}</div>
                        <Button className={cls.success__button} onClick={switchModal}>Закрыть</Button>
                    </div>
                }

            </Modal>
        </div>
    )
}

export default Team