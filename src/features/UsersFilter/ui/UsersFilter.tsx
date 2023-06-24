import { FC, memo, useEffect, useState } from 'react'
import { IUser } from '@entities/User/model/model'
import UsersList, { UsersListProps } from '@entities/User'
import cls from "./UsersFilter.module.sass"

type UsersFilterProps = {
    className?: string,
    users: IUser[],
    searchedEmail: string
} & UsersListProps

export const SearchUsers: FC<UsersFilterProps> = memo(({ searchedEmail, users, ...usersProps }) => {
    const [filteredUsers, setFilteredUsers] = useState(users)

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

    useEffect(() => {
        if (searchedEmail == "") {
            setFilteredUsers(users)
        } else {
            setFilteredUsers(users.filter(user => user.email.toLowerCase().includes(searchedEmail)))
        }
    }, [searchedEmail, users])


    if (!usersProps.loading && filteredUsers.length == 0) {
        return <div className={cls.empty}>Ничего не найдено...</div>
    }

    return <UsersList users={filteredUsers} {...usersProps} />
})