import { useCallback, useEffect, useState } from 'react';
import { IUser } from './model';

const URL = import.meta.env.MODE === "PROD" ? import.meta.env.VITE_SERVER_URL : "db.json"

export const useUsers = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchUsers = async () => {
        try {
            setLoading(true)
            console.log(URL)
            const data = await (await fetch(URL)).json() // Тут можно было бы сделать через axios, однако в приложении всего 1 запрос, поэтому не вижу в этом смысла
            setUsers(data)
            setError(null)
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    }

    const updateUser = useCallback((user: IUser) => {
        setUsers((prevUsers) => {
            const filtered = prevUsers.filter(u => u.email !== user.email)
            return [...filtered, user]
        })
    }, [users])

    const createUser = useCallback((newUser: IUser) => {
        setUsers(prev => [...prev, newUser])
    }, [users])

    const deleteUser = useCallback((user: IUser) => {
        setUsers(prev => prev.filter(u => u.email !== user.email))
    }, [users])

    const changeUserPermissions = useCallback((email: string, permissions: string[]) => {
        setUsers(prev => {
            const searchedUser = prev.find(u => u.email == email)!
            searchedUser.permissions = permissions
            return [...prev]
        })
    }, [users])


    useEffect(() => {
        fetchUsers()
    }, [])
    return {
        updateUser,
        createUser,
        users,
        loading,
        error,
        deleteUser,
        changeUserPermissions
    }
}
