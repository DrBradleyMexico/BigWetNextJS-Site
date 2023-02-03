import s from "@/components/Links.module.css"
import Min from "@/components/svgs/min";
import Max from "@/components/svgs/max";
import Close from "@/components/svgs/close";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/utils/PostUtils";
import { PostMeta } from "@/types/PostMeta";

export default function Articles({ posts }: { posts: PostMeta[] }) {
    return (
        <section>
            <div className={`${s.border} ${s.window}`}>
                <div className={s.titleBar}>
                    <div className={s.titleBarText}>{'blog.html'}
                    </div>
                    <div className={s.titleBarButtons}>
                        <button className={`${s.border} ${s.button}`}><Min></Min></button>
                        <button className={`${s.border} ${s.button}`}><Max></Max></button>
                        <button className={`${s.border} ${s.button}`}><Close></Close></button>
                    </div>
                </div>
                <div className={s.windowBody}>
                    <h3>{'check out these articles'}</h3>
                    <div className={s.homeContent}>
                        <div className={s.homeImage}>
                            <img className={s.homeImageMore} src={"/newports.gif"} alt="" />
                        </div>
                        <div className={s.articles}>
                            {posts.map((post) => (
                                <Link key={post.slug} className={s.article} href={`/blog/post/${post.slug}`} target="_blank">
                                    {post.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts()
        .map(post => post.meta);
    return { props: { posts } }
}
