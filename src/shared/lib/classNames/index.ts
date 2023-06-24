type Mods = Record<string, boolean>

export const classNames = (className: string, mods:Mods = {}, additional: (string | undefined)[] = []) => {
    const classes = [className, ...additional]

    Object.entries(mods).filter(([_, value]) => value).forEach(([className]) => classes.push(className))

    return classes.filter(Boolean).join(" ") 
}