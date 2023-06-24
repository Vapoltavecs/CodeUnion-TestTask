import { FC } from 'react'
import cls from './UsersList.module.sass'
import { classNames } from '@shared/lib/classNames'
import { IUser } from '@entities/User'
import { UserItem } from '../UserItem/UserItem'
import Loader from '@shared/ui/Loader'

export type UsersListProps = {
    className?: string,
    users: IUser[],
    loading: boolean,
    error?: Error | null,
    deleteUser: (user:IUser) => void
} 

export const UsersList: FC<UsersListProps> = ({ className, users, loading, error, deleteUser }) => {
    if (loading) {
        return <Loader />
    }
    if(error){
        return <div>error</div>
    }
    return <ul className={classNames(cls.list, {}, [className])}>{users.map(user => <li key={user.email} className={cls.list__item}><UserItem onChangePermissions={() => {}} onDelete={deleteUser} {...user} /></li>)}</ul>
}