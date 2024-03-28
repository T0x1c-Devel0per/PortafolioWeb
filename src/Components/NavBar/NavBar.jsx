import './NavBar.css';

function Navbar() {
    return (
        <div className='navbar-container'>
            <nav className='nav-bar'>
                <ul>
                    <span>
                        <a href='#aboutme'>-Mi Info</a>
                    </span>
                </ul>
                <ul>
                    <span>
                        <a href='#Photos'>-Fotos</a>
                    </span>
                </ul>
                <ul>
                    <span>
                        <a href='#Graph'>-Habilidades</a>
                    </span>
                </ul>
                <ul>
                    <span>
                        <a href='#Projects'>-Proyectos</a>
                    </span>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
