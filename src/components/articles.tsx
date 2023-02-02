import s from "@/components/Articles.module.css"
import Link from "next/link"
import Min from "./svgs/min";
import Max from "./svgs/max";
import Close from "./svgs/close";
import Footer from "./layout/footer";


const Articles = () => {
    return (
        <section>
            <div className={`${s.border} ${s.window}`}>
                <div className={s.titleBar}>
                    <div className={s.titleBarText}>{'index.html'}
                    </div>
                    <div className={s.titleBarButtons}>
                        <button className={`${s.border} ${s.button}`}><Min></Min></button>
                        <button className={`${s.border} ${s.button}`}><Max></Max></button>
                        <button className={`${s.border} ${s.button}`}><Close></Close></button>
                    </div>
                </div>
                <div className={s.windowBody}>
                    <h3>{'check this out'}</h3>
                    <div className={s.homeContent}>
                        <div className={s.homeImage}>
                            <img className={s.homeImageMore} src={"/meirl5.png"} alt="" />
                        </div>
                        <div className={s.articles}>
                            <Link className={s.article} href="https://infosec.party/" target="_blank">
                                {"infosec party: cysec resources and career tools"}
                            </Link>
                            <Link className={s.article} href="https://thepaddyfields.xyz/" target="_blank">
                                {"the paddy fields blog"}
                            </Link>
                            <Link className={s.article} href="https://github.com/DrBradleyMexico/BlackKingdomGameDemo" target="_blank">
                                {"black kingdom rpg game concept demo"}
                            </Link>
                            <Link className={s.article} href="https://bensden.xyz/" target="_blank">
                                {"bens development blog"}
                            </Link>
                            <Link className={s.article} href="/secret">
                                {"secret garfield folder. DO NOT click"}
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    );
}

export default Articles;
