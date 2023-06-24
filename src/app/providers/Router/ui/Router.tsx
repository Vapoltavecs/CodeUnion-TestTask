import { TeamAsync } from '@pages/Team/TeamAsync'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const Router: FC = () => {
    return (
        <Routes>
            <Route element={<TeamAsync />} path="/" />
        </Routes>
    )
}

export default Router