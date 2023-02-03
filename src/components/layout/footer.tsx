import s from "@/components/layout/layout.module.css"
import Link from "next/link";
import Emoji from "../emoji";

const Footer = () => {
    return (
        <div className={s.footerBarButtons}>
            <button className={`${s.border} ${s.button}`}>
                <Link href="/">
                    <Emoji symbol="😤" ariaLabel="triumph face emoji" />home
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="/articles">
                    <Emoji symbol="✏️" ariaLabel="pencil emoji" />articles
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="/about">
                    <Emoji symbol="🙂" ariaLabel="smiley face emoji" />about
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="https://twitter.com/DrBradleyMexico" target="_blank">
                    <Emoji symbol="🐦" ariaLabel="bird emoji" />twitter
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="https://github.com/DrBradleyMexico" target="_blank">
                    <Emoji symbol="💻" ariaLabel="laptop emoji" />github
                </Link>
            </button>
            <button className={`${s.border} ${s.button}`}>
                <Link href="mailto: &#098;&#114;&#097;&#100;&#119;&#101;&#105;&#100;&#110;&#101;&#114;&#056;&#054;&#052;&#050;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                    <Emoji symbol="📩" ariaLabel="mail emoji" />contact
                </Link>
            </button>
        </div>
    );
}

export default Footer;
