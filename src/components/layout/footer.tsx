import s from "./layout.module.css"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={s.footer}>
            <Image src="/BrangyTurd.png" width={20} height={20} alt="" />
            <Link href="https://twitter.com/DrBradleyMexico" target="_blank">{"twitter"}</Link>
            <> | </>
            <Image src="/whoa.gif" width={30} height={20} alt="" />
            <Link href="https://github.com/DrBradleyMexico" target="_blank">{"github"}</Link>
        </div>
    );
}

export default Footer;
