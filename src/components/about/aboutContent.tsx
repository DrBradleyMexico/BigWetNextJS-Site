import s from "./About.module.css"
import Image from "next/image";
import Emoji from "../emoji";

const AboutContent = () => {
    return (
        <div className={s.aboutSection}>
            <Image className={s.aboutImage}
                src={"/meirl2.jpg"} width="300" height="300" alt="" />
            <h1>
                {'about the doctor himshelf'}
            </h1>
            <p className={s.aboutText}>
                {"hello! i am doctor bradley mexico and welcome to my very cool and fun website. this website has almost no purpose other than to teach myself some NextJS concepts while sharing some things me and my friends have made. if you'd like to see my joke twitter as well as my github, check the links in the footer. you can email me by smashing that contact link in the navbar. despite my offputting website, i am a friendly little guy who likes to meet and chat with people "}
                <Emoji symbol="🙂" ariaLabel="smiley face" />
            </p>
        </div>
    );
}

export default AboutContent;
