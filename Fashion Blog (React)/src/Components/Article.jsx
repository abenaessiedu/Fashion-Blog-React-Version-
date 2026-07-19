import {blogphoto1} from './public/blogphoto1'
import {blogphoto2} from './public/blogphoto2'


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