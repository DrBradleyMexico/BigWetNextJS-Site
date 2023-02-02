import s from "@/components/layout/layout.module.css"
import Link from "next/link";
import Emoji from "../emoji";

const Footer = () => {
    return (
        <div className={s.footerBarButtons}>
            <button className={`${s.border} ${s.button}`}>
                <Link href="/">
                    <Emoji symbol="😤" label="triumph face emoji" />home
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="/about">
                    <Emoji symbol="🙂" label="smiley face emoji" />about
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="https://twitter.com/DrBradleyMexico" target="_blank">
                    <Emoji symbol="🐦" label="bird emoji" />twitter
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="https://github.com/DrBradleyMexico" target="_blank">
                    <Emoji symbol="💻" label="laptop emoji" />github
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="mailto: &#098;&#114;&#097;&#100;&#119;&#101;&#105;&#100;&#110;&#101;&#114;&#056;&#054;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                    <Emoji symbol="📩" label="mail emoji" />contact
                </Link>
            </button>
        </div>
    );
}

export default Footer;
