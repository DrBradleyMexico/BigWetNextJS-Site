import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { PostMeta } from "@/types/PostMeta"

const ARTICLES_DIRECTORY = path.join(process.cwd(), "posts")

interface Post {
    content: string;
    meta: PostMeta; //custom type from PostMeta.ts
}

export const getSlugs = (): string[] => {
    const paths = fs.readdirSync(ARTICLES_DIRECTORY);

    return paths.map((path) => {
        //regex out the file extension
        const slug = path.replace(/\.mdx$/, "");
        return slug;
    })
}

export const getAllPosts = () => {
    const posts = getSlugs().map((slug) => getPostFromSlug(slug))
        //sorting by date
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
    return posts;
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(ARTICLES_DIRECTORY, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);

    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            title: data.title ?? slug,
            author: data.author ?? "Bradley Weidner",
            excerpt: data.excerpt ?? "",
            tags: data.tags ?? [],
            category: data.category ?? "Needs category",
            date: (data.date ?? new Date()).toString(),
        }
    }
} 