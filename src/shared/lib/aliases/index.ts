import { Alias } from "vite"
import path from "path"

export const configAliases = (name: string): Alias => {
    return {
        find: `@${name}`,
        replacement: path.resolve("src", name)
    }
}