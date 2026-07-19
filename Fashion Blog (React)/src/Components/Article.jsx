export default function Article({ title, altText, content }) {
    return (
        <article className="article"> 
        <h2> { title }</h2> 
        <img src={} alt={} /> 
        <p> {content} </p>
        <a href="#continue" className="continue-link"> Continues... </a>
        </article>

    ); 
}