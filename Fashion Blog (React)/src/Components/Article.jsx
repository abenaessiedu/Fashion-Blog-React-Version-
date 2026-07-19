import {blogImage1} from './images/blog-image-1.jpg'
import {blogImage2} from './images/blog-image-2.jpg'


export default function Article({ title, images, content }) {
    return (
        <article className="article"> 
        <h2> { title }</h2> 
        <img src={} alt={} /> 
        <p> {content} </p>
        <a href="#continue" className="continue-link"> Continues... </a>
        </article>

    ); 
}