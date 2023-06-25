export const isArrayEqual = <T>(arr1: T[], arr2: T[]): boolean => {
    if (arr1.length !== arr2.length) return false
    return arr1.map(el => arr2.includes(el)).every(Boolean)
}