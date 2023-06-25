import { useWindowResize } from "@shared/lib/hooks/useWindowResize"
import { FC, ReactNode, useEffect, useState } from "react"
import { AppContext } from "../model/context"
import { IAppContenxt } from "../model/model"

type Props = {
    children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
    const { width } = useWindowResize()
    const [menuShowed, setMenuShowed] = useState<boolean>(width > 900)

    useEffect(() => {
        setMenuShowed(width > 900)
    }, [width])

    const ctx: IAppContenxt<boolean> = {
        menu: {
            value: menuShowed,
            setValue: setMenuShowed
        }
    }

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}