import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/Home.jsx"
import Timeline from "./components/OtherPages/Timeline/Timeline.jsx"
import NotFoundPage from "./components/NotFoundPage.jsx"
import ProductionVisuals from "./components/OtherPages/PV/PV.jsx"
import Wedding from "./components/OtherPages/Wedding/Wedding.jsx"
import OtherLogos from "./components/OtherPages/OtherLogos/OtherLogos.jsx"
import KimonosTail from "./components/OtherPages/KimonosTail/KimonosTail.jsx"
import Illustrations from "./components/Illustrations/Illustrations.jsx"
import Guide from './components/OtherPages/PV/ArtistGuide.jsx'
import Invite from "./components/OtherPages/Wedding/Invite.jsx"
import AboutMe from "./components/OtherPages/AboutMe/AboutMe.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path:"/", element: <App /> },
  { path: "/home", element:<Home /> },
  { path: "/timeline", element: <Timeline /> },
  { path: "/productionvisuals", element: <ProductionVisuals /> },
  { path: "/wedding", element: <Wedding /> },
  { path: "/kimonostail", element: <KimonosTail/> },
  { path: "/otherlogos", element: <OtherLogos/> },
  { path: "/illustrations", element: <Illustrations /> },
  { path: "/artistguide", element: <Guide /> },
  { path: "/invite", element: <Invite /> },
  { path: "/aboutme", element: <AboutMe /> },
  { path: "*", element: <NotFoundPage /> }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
