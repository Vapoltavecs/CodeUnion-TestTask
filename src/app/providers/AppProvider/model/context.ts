import { IAppContenxt } from './model';
import { createContext } from "react"

export const AppContext = createContext<IAppContenxt<boolean>>({})