import { ReactNode, useState } from "react";
import Header from "./header";

interface Props {
    children?: ReactNode
}

export const Layout = ({ children, ...props }: Props) => {
    return (
        <>
            <Header />
            <main {...props}>{children}</main>
        </>
    )
}
