import Home from "Pages/Home"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "assets/css/index.css"
import "config/i18n"
import HomeLayout from "Layouts/HomeLayout"
import News from "Pages/News"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="news/:id" element={<News />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
