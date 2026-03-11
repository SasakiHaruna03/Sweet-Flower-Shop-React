import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

function App() {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: (
                    <>
                        <Header />
                        <main>
                            <Home />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/gallery.html",
                element: (
                    <>
                        <Header />
                        <main>
                            <Gallery />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/about.html",
                element: (
                    <>
                        <Header />
                        <main>
                            <About />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/contact.html",
                element: (
                    <>
                        <Header />
                        <main>
                            <Contact />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/index.html",
                element: <Navigate to="/" replace />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
            {
                path: "/gallery",
                element: (
                    <>
                        <Header />
                        <main>
                            <Gallery />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/about",
                element: (
                    <>
                        <Header />
                        <main>
                            <About />
                        </main>
                        <Footer />
                    </>
                ),
            },
            {
                path: "/contact",
                element: (
                    <>
                        <Header />
                        <main>
                            <Contact />
                        </main>
                        <Footer />
                    </>
                ),
            },
            // also accept legacy static filenames so direct navigation to
            // /gallery.html or /about.html works when users open those URLs.
        ],
        // Pass future flags at runtime. Some installed TypeScript types may not
        // yet include these flags, so cast to `any` to avoid type errors.
        ({ future: { v7_startTransition: true, v7_relativeSplatPath: true } } as any)
    );

    return <RouterProvider router={router} />;
}

export default App;