import { Dispatch, SetStateAction } from "react"

interface IContenxtItem<T> {
    value: T,
    setValue: Dispatch<SetStateAction<T>>
}

export interface IAppContenxt<T> extends Record<string, IContenxtItem<T>> {}