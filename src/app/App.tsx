import { FC } from 'react'
import CommonProvider from './providers/CommonProvider'
import { BrowserRouter } from "react-router-dom"

const App: FC = () => {
    return (
        <BrowserRouter>
            <CommonProvider />
        </BrowserRouter>
    )
}

export default App 