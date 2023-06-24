import React, { FC, useCallback, useEffect, useRef } from 'react'
import Input from '@shared/ui/Input'
import { ReactComponent as SearchIcon } from "@app/assets/icons/Search.svg"
import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick'

type SearchProps = {
    className?: string,
    focusOnInit?: boolean,
    onOutsideClick?: () => void,
    onSearch: (word: string) => void,
    searchValue: string
}

export const Search: FC<SearchProps> = React.memo(({ className, focusOnInit, onOutsideClick, searchValue, onSearch }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useOutsideClick(inputRef, () => onOutsideClick && onOutsideClick())

    useEffect(() => {
        if (focusOnInit && inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const changeHandler = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        onSearch(e.currentTarget.value)
    }, [])


    return <Input onChange={changeHandler} value={searchValue} className={className} inputRef={inputRef} icon={<SearchIcon />} placeholder="Поиск по Email" />
})