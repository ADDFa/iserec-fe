import Home from "Pages/Home"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "assets/css/index.css"
import "config/i18n"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    </BrowserRouter>
)
