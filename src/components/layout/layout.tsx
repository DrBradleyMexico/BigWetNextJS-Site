import { ReactNode, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

interface Props {
    children?: ReactNode
}

export const Layout = ({ children, ...props }: Props) => {
    return (
        <>
            <Header />
            <Navbar />
            <main {...props}>{children}</main>
            <Footer />
        </>
    )
}
