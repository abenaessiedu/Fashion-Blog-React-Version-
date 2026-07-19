export default function Nav({ type }) {
    const isMainNav = type === 'main'; 
    const navLinks = isMainNav ? (
    <>
    <li> 
        <a href="#womens"> 
            Women's
        </a>
    </li>

    <li> 
        <a href="#mens"> 
            Men's
        </a>
    </li>

    <li> 
        <a href="#onthestreet"> 
            On The Street
        </a>
    </li>

    <li> 
        <a href="#thecatwalk"> 
            The Catwalk
        </a>
    </li>

    <li> 
        <a href="#adwatch"> 
            AdWatch
        </a>
    </li>

    <li> 
        <a href="#about"> 
            About

        </a>
    </li>

    </>

    );
    
    return (
        <nav className={`nav-${type}`} aria-label={`${type} navigation`} role="navigation"> 
        <ul className="nav-list"> 
            {navLinks}
        </ul>
        
        </nav>

    );
}