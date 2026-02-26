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
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <BrowserRouter basename="/allycatportfolio/">
// //       <Routes>
// //         <Route path="/" element={<App />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/timeline" element={<Timeline />} />
// //         <Route path="/productionvisuals" element={<ProductionVisuals />} />
// //         <Route path="/wedding" element={<Wedding />} />
// //         <Route path="/kimonostail" element={<KimonosTail />} />
// //         <Route path="/otherlogos" element={<OtherLogos />} />
// //         <Route path="/illustrations" element={<Illustrations />} />
// //         <Route path="/artistguide" element={<Guide />} />
// //         <Route path="/invite" element={<Invite />} />
// //         <Route path="/aboutme" element={<AboutMe />} />
// //         <Route path="*" element={<NotFoundPage />} />
// //       </Routes>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );
// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/home", element:<Home /> },
//   { path: "/timeline", element: <Timeline /> },
//   { path: "/productionvisuals", element: <ProductionVisuals /> },
//   { path: "/wedding", element: <Wedding /> },
//   { path: "/kimonostail", element: <KimonosTail/> },
//   { path: "/otherlogos", element: <OtherLogos/> },
//   { path: "/illustrations", element: <Illustrations /> },
//   { path: "/artistguide", element: <Guide /> },
//   { path: "/invite", element: <Invite /> },
//   { path: "/aboutme", element: <AboutMe /> },
//   { path: "*", element: <NotFoundPage /> }

// ]);

//  createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// {/* <HashRouter>
//   <Routes>
//     <Route path="/" element={<App />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="timeline" element={<Timeline />} />
//         <Route path="/productionvisuals" element={<ProductionVisuals />} />
//         <Route path="/wedding" element={<Wedding />} />
//         <Route path="/kimonostail" element={<KimonosTail />} />
//         <Route path="/otherlogos" element={<OtherLogos />} />
//         <Route path="/illustrations" element={ <Illustrations /> } />
//         <Route path="/artistguide" element={ <Guide /> } />
//         <Route path="/invite" element={<Invite />} />
//         <Route path="/aboutme" element={<AboutMe />} />
//         <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// </HashRouter> */}
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/productionvisuals" element={<ProductionVisuals />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/kimonostail" element={<KimonosTail />} />
        <Route path="/otherlogos" element={<OtherLogos />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/artistguide" element={<Guide />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);