import Router from "@app/providers/Router"
import FullPageLoader from "@shared/ui/FullPageLoader"
import Menu from "@widgets/Menu"
import { Suspense } from "react"
import AppProvider from "../../AppProvider"
import cls from "./CommonProvider.module.sass"

export const CommonProvider = () => {
    return (
        <AppProvider>
            <div className={cls.wrapper}>
                <Menu />
                <Suspense fallback={<FullPageLoader />}>
                    <Router />
                </Suspense>
            </div>
        </AppProvider>
    )
}