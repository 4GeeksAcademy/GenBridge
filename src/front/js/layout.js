import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { SignupAbuelo } from "./pages/signupabuelo";
import { SignupVoluntario } from "./pages/signupvoluntario";
import { Profile } from "./pages/profile";
import { ProfilEdit } from "./pages/profiledit";
import VideocallCine from "./pages/videocall";
import { VideoRoom } from "./pages/videoroom";
import NotFound from "./pages/notfound";
import VideocallTertulia from "./pages/tertuliallamada";
import VideocallCocina from "./pages/videocallcocina";
import VideocallArquitecto from "./pages/videocallarquitecto";
import VideocallGamer from "./pages/videocallgamer";
import VideocallFiesta from "./pages/videocallfiesta";
import VideocallViajero from "./pages/videocallviajero";

const Layout = () => {
    const location = useLocation();

    const isFooterHidden = () => {
        return location.pathname === "/videocallcine" || location.pathname === "/videocalltertulia" ||
            location.pathname === "/videocallcocina" || location.pathname === "/videocallgamer" || location.pathname === "/videocallarquitecto" ||
            location.pathname === "/videocallfiesta" || location.pathname === "/videocallviajero";
    };

    const isNavbarHidden = () => {
        return location.pathname === "/videocallcine" || location.pathname === "/videocalltertulia" ||
            location.pathname === "/videocallcocina" || location.pathname === "/videocallgamer" || location.pathname === "/videocallarquitecto" ||
            location.pathname === "/videocallfiesta" || location.pathname === "/videocallviajero";
    };

    useEffect(() => {
        const token = localStorage.getItem("miTokenJWT");

        if (!token && !isPublicRoute(location.pathname)) {
            Navigate("/login");
        }
    }, [location.pathname]);

    const isPublicRoute = (pathname) => {
        const publicRoutes = ["/", "/login", "/signupabuelo", "/signupvoluntario", "/about", "/contact", "/terms", "/privacy"];
        return publicRoutes.includes(pathname);
    };

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") {
        return <BackendURL />;
    }

    return (
        <div>
            <ScrollToTop>
                {!isNavbarHidden() && <Navbar />}
                <Routes>
                    <Route element={<Landing />} path="/" />
                    <Route element={<VideocallCine />} path="/videocallcine" />
                    <Route element={<VideocallTertulia />} path="/videocalltertulia" />
                    <Route element={<VideocallCocina />} path="/videocallcocina" />
                    <Route element={<VideocallArquitecto />} path="/videocallarquitecto" />
                    <Route element={<VideocallGamer />} path="/videocallgamer" />
                    <Route element={<VideocallFiesta />} path="/videocallfiesta" />
                    <Route element={<VideocallViajero />} path="/videocallviajero" />
                    <Route element={<VideoRoom />} path="/home" />
                    <Route element={<Profile />} path="/profile" />
                    <Route element={<ProfilEdit />} path="/editprofile" />
                    <Route element={<SignupVoluntario />} path="/signupvoluntario" />
                    <Route element={<SignupAbuelo />} path="/signupabuelo" />
                    <Route element={<Demo />} path="/demo" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Single />} path="/single/:theid" />
                    <Route element={<NotFound />} path="*" />
                </Routes>
                {!isFooterHidden() && <Footer />}
            </ScrollToTop>
        </div>
    );
};

const App = () => (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

export default injectContext(App);
