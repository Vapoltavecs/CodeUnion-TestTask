import { FC, ReactNode, useState } from "react"
import { AppContext } from "../model/context"
import { IAppContenxt } from "../model/model"

type Props = {
    children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
    const [menuShowed, setMenuShowed] = useState<boolean>(false)


    const ctx: IAppContenxt<boolean> = {
        menu: {
            value: menuShowed,
            setValue: setMenuShowed
        }
    }

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}