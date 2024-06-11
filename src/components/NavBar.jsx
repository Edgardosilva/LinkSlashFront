import React from 'react';

const NavBar = () => {
    return (
        <nav className='border-b-2 flex justify-center items-center h-20'>
            <ul className='flex justify-center gap-10'>
                <li><a href="https://www.linkedin.com/in/edgardo-silva/" target='_blank'>Linkedin</a></li>
                <li><a href="https://github.com/Edgardosilva" target='_blank'>GitHub</a></li>
                <li><a href="https://github.com/Edgardosilva/LinkSlashFront" target='_blank'>Repositorio</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;