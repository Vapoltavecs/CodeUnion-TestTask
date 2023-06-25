import { TeamAsync } from '@pages/Team/TeamAsync'
import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

const Router: FC = memo(() => {
    return (
        <Routes>
            <Route element={<TeamAsync />} path="/" />
        </Routes>
    )
})

export default Router