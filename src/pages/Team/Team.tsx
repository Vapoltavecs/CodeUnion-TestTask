import { FC, memo, useCallback, useContext, useState } from 'react'
import cls from './Team.module.sass'
import { classNames } from '@shared/lib/classNames'
import { IUser, useUsers } from '@entities/User'
import Modal from '@shared/ui/Modal'
import Button from '@shared/ui/Button'
import Search from '@widgets/Search'
import { ReactComponent as SearchIcon } from "@app/assets/icons/Search.svg"
import { SearchUsers } from '@features/UsersFilter'
import CreateUser from '@features/CreateUser'
import { useWindowResize } from '@shared/lib/hooks/useWindowResize'
import { ReactComponent as Burger } from "@app/assets/icons/Burger.svg"
import { AppContext } from '@app/providers/AppProvider'
import { AnimatePresence } from 'framer-motion'

const Team: FC = memo(() => {
    const { users, loading, error, createUser, deleteUser, changeUserPermissions } = useUsers()
    const { menu } = useContext(AppContext)
    const [createShowed, setCreateShowed] = useState(false)
    const [isSearched, setSearched] = useState(false)
    const [searchedEmail, setSearchedEmail] = useState("")
    const [addedUser, setAddedUser] = useState<IUser>()
    const { width } = useWindowResize()

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

    const openMenu = () => menu.setValue(true)

    const isMobile = width < 900

    const search = <Search className={cls.Team__search} onOutsideClick={closeSearch} searchValue={searchedEmail} onSearch={onSearch} focusOnInit />

    return (
        <div className={classNames(cls.Team)}>
            <div className={cls.Team__header}>
                <div className={cls.Team__title}>{isMobile && <button onClick={openMenu}><Burger /></button>}<h1>Команда</h1></div>
                <div className={cls.Team__controllers}>
                    <AnimatePresence>{isMobile ? search : (isSearched ?  search : <SearchIcon onClick={openSearch} className={cls.Team__icon} />)}</AnimatePresence>
                    <Button onClick={switchModal} className={cls.Team__button}>Добавить пользователя</Button>
                </div>
            </div>
            <SearchUsers changePermissions={changeUserPermissions} deleteUser={deleteUser} searchedEmail={searchedEmail} users={users} className={cls.Team__list} loading={loading} error={error} />
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
})

export default Team