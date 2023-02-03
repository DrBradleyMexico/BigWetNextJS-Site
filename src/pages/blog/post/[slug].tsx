import { PostMeta } from "@/types/PostMeta";
import { getPostFromSlug, getSlugs } from "@/utils/PostUtils";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import s from "@/styles/Blog.module.css"
import Footer from "@/components/layout/footer";


interface MDXPost {
    source: MDXRemoteSerializeResult;
    meta: PostMeta;
}

const prettyCodeOptions = {
    // rehype is making shiki apply VScode style to markdown code block
    theme: "one-dark-pro",
    keepBackground: true,

    // Callback hooks to add custom logic to nodes when visiting them.
    onVisitLine(node: any) {
        // Prevent lines from collapsing in display: grid mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
    onVisitHighlightedLine(node: any) {
        // Each line node by default has class="line".
        node.properties.className.push('highlighted');
    },
    onVisitHighlightedWord(node: any) {
        // Each word node has no className by default.
        node.properties.className = ['word'];
    },
}

export default function Post({ post }: { post: MDXPost }) {
    return (
        <>
            <div className={s.blogPostContainer}>
                <MDXRemote
                    {...post.source} />
                <Footer />
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string }
    const { content, meta } = getPostFromSlug(slug);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                // using "@ts-ignore" to tell typescript not to error check the following
                //@ts-ignore
                rehypeSlug,
                //@ts-ignore
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                //@ts-ignore
                [rehypeExternalLinks, { target: "_blank" }],
                [rehypePrettyCode, prettyCodeOptions]
            ]
        }
    })
    //NOTE have a look at this
    return { props: { post: { source: mdxSource, meta: meta } } }
}


// using async so multiple processes can run at the same time
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false, //no fallback because these pages WILL exist
    }
}