import React from 'react';

const NavBar = () => {
    return (
        <nav className='border-b-2 flex justify-center items-center h-20'>
            <ul className='flex justify-center gap-10'>
                <li><a href="https://www.linkedin.com/in/edgardo-silva/">Linkedin</a></li>
                <li><a href="https://github.com/Edgardosilva">GitHub</a></li>
                <li><a href="">Repositorio</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;