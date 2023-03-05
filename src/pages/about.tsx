import s from "@/components/Links.module.css"
import Min from "@/components/svgs/min";
import Max from "@/components/svgs/max";
import Close from "@/components/svgs/close";
import Footer from "@/components/layout/footer";


const About = () => {
    return (
        <section>
            <div className={`${s.border} ${s.window}`}>
                <div className={s.titleBar}>
                    <div className={s.titleBarText}>{'about.html'}
                    </div>
                    <div className={s.titleBarButtons}>
                        <button className={`${s.border} ${s.button}`}><Min></Min></button>
                        <button className={`${s.border} ${s.button}`}><Max></Max></button>
                        <button className={`${s.border} ${s.button}`}><Close></Close></button>
                    </div>
                </div>
                <div className={s.windowBody}>
                    <h3>{'about the doctor himshelf'}</h3>
                    <div className={s.homeContent}>
                        <div className={s.homeImage}>
                            <img className={s.homeImageMore} src={"/meirl2.jpg"} alt="" />
                        </div>
                        <div className={s.articles}>
                            {"hello! i'm brad and welcome to my very cool and fun website. this website has almost no purpose other than to teach myself some web dev concepts while sharing some things me and my friends have made. if you'd like to see my joke twitter as well as my github, check the links in the footer. you can email me by smashing that contact link in the navbar. despite my offputting website, i am a friendly little guy who likes to meet and chat with people"}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    );
}

export default About;
