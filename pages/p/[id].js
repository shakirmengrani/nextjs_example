import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
  
const Page = props => {
    return (
        <Layout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            {props.show.image ? <img src={props.show.image.medium} /> : null}
        </Layout>
      );
} 
  

Page.getInitialProps = async function(context) {
    const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}`);
    const data = await res.json();
    return {
        show: data
    };
}
export default Page;