import s from "./layout.module.css"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <Link href="/">{"home"}</Link>
            <p> | </p>
            <Link href="/about">{"about"}</Link>
            <p> | </p>
            <Link href="mailto: &#098;&#114;&#097;&#100;&#119;&#101;&#105;&#100;&#110;&#101;&#114;&#056;&#054;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">{"contact"}</Link>
        </div>
    );
}

export default Navbar;
