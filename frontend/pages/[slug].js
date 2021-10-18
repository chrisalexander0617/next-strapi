export default function Post({post}){
    return (
        <>
            <div>{post.Title}</div>
            <p>{post.Content}</p>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/posts')
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: {slug: post.Slug}
    }))

    return {
       paths, 
       fallback: false
    }
}

export async function getStaticProps({ params }) {
    const {slug} = params;
    const URL = `http://localhost:1337/posts?Slug=${slug}`;
    const res = await fetch(URL);
    const data= await res.json();

    const post = data[0];

    return {
        props:{
            post
        }
    }
}