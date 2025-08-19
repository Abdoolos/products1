import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavScrollTop from "./components/nav-scroll-top";
import SourcingAgentsLanding from "./components/SourcingAgentsLanding";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ServiceDetails from "./templates/service-details";
import TeamPage from "./pages/team";
import FaqPage from "./pages/faq";
import BlogPage from "./pages/blog";
import BlogLeftSidebarPage from "./pages/blog-left-sidebar";
import BlogRightSidebarPage from "./pages/blog-right-sidebar";
import BlogDetailsPage from "./templates/blog-details";
import BlogAuthor from "./templates/blog-author";
import BlogDate from "./templates/blog-date";
import BlogTag from "./templates/blog-tag";
import BlogCategory from "./templates/blog-category";
import ContactPage from "./pages/contact";
import "swiper/css";
import "swiper/css/navigation";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";

const App = () => {
    return (
        <Router>
            <NavScrollTop>
                <Routes>
                    {/* Norwegian Sourcing Agents Landing - Primary Route */}
                    <Route path="/" element={<SourcingAgentsLanding />} />
                    {/* Original English Routes - Kept for reference */}
                    <Route path="/original" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route
                        path="/service-details/:id"
                        element={<ServiceDetails />}
                    />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route
                        path="/blog-left-sidebar"
                        element={<BlogLeftSidebarPage />}
                    />
                    <Route
                        path="/blog-right-sidebar"
                        element={<BlogRightSidebarPage />}
                    />
                    <Route
                        path="/blog-details/:id"
                        element={<BlogDetailsPage />}
                    />
                    <Route path="/author/:author" element={<BlogAuthor />} />
                    <Route path="/date/:date" element={<BlogDate />} />
                    <Route path="/tag/:slug" element={<BlogTag />} />
                    <Route path="/category/:slug" element={<BlogCategory />} />
                </Routes>
            </NavScrollTop>
        </Router>
    );
};

export default App;
