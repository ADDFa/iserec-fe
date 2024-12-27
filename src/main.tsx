import Home from "Pages/Home"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "assets/css/index.css"
import "config/i18n"
import HomeLayout from "Layouts/HomeLayout"
import News from "Pages/News"
import Introduction from "Pages/Introduction"
import Organization from "Pages/Organization"
import WorkingGroup from "Pages/WorkingGroup"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="news/:name" element={<News />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/organization" element={<Organization />} />
                <Route path="/working-group" element={<WorkingGroup />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
