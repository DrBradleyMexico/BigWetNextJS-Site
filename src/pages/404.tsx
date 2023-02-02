import Link from "next/link";
import s from "@/components/Articles.module.css"
import Min from "@/components/svgs/min";
import Max from "@/components/svgs/max";
import Close from "@/components/svgs/close";

const NotFound = () => {
    return (
        <div className={`${s.border} ${s.window}`}>
            <div className={s.titleBar}>
                <div className={s.titleBarText}>404.html</div>
                <div className={s.titleBarButtons}>
                    <button className={`${s.border} ${s.button}`}><Min></Min></button>
                    <button className={`${s.border} ${s.button}`}><Max></Max></button>
                    <button className={`${s.border} ${s.button}`}><Close></Close></button>
                </div>
            </div>
            <div className={s.windowBody}>
                <h2>{"ah hell"}</h2>
                <h3>{"that boy be rootin round in places he don't understand"}</h3>
                <div className={s.homeContent}>
                    <div className={s.homeImage}>
                        <img className={s.homeImageMore} src={"/spinningpikachu.gif"} alt="" />
                    </div>
                    <div className={s.articles}>
                        <Link href="/">
                            {"go back from once ye came"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
