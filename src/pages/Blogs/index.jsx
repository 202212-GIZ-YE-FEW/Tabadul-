import React from "react";

import SingleBlog from "@/components/SingleBlog";

import { BlogContainer } from "../../components/SingleBlog/SingleBlog.styled";
function BlogPage({ blogs }) {
    return (
        <BlogContainer>
            {blogs?.map((blog) => {
                return (
                    <SingleBlog
                        key={blog.id}
                        title={blog.title}
                        desc={blog.body}
                        id={blog.id}
                    />
                );
            })}
        </BlogContainer>
    );
}
export default BlogPage;

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();

    return {
        props: {
            blogs,
        }, // will be passed to the page component as props
    };
}