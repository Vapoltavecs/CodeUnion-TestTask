export type Permission = {
    value: string,
    label: string
}

export const permissions:Permission[] = [ // В реальном проекте я бы запрашивал привилегии с бэка
    {
        value: "moderation", 
        label: "Модерация объявлений"
    },
    {
        value: "blog", 
        label: "Блог"
    },
    {
        value: "support", 
        label: "Тех. поддержка"
    },
    {
        value: "appeal",
        label: "Обращение клиентов"
    },
    {
        value: "analytics",
        label: "Аналитика"
    },
    {
        value: "stock",
        label: "Акции"
    },
    {
        value: "admin",
        label: "Администратор"
    }
]