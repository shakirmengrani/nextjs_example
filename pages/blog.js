import Layout from '../components/Layout'
import PostLink from '../components/PostLink'
import fetch from 'isomorphic-unfetch'
const Blog = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
        {props.shows.map(show => (
            <PostLink key={show.id} id={show.id} title={show.name} />
        ))}
        </ul>
    </Layout>
);

Blog.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data.map(entry => entry.show)
    };
}

export default Blog;