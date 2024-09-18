import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes'

import "./styles/reset.css"
import "./styles/global.css"
import "./styles/animations.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={mainRouter}/>
    </StrictMode>,
)
