import React from 'react';

const NavBar = () => {
    return (
        <nav className='backdrop-blur-md bg-white/5 border-b-2 border-white/10 flex justify-center items-center h-20'>
            <ul className='flex justify-center gap-10'>
                <li><a href="https://www.linkedin.com/in/edgardo-silva/" target='_blank' rel='noopener noreferrer' className='text-white/60 hover:text-violet-300 transition-colors duration-200'>Linkedin</a></li>
                <li><a href="https://github.com/Edgardosilva" target='_blank' rel='noopener noreferrer' className='text-white/60 hover:text-violet-300 transition-colors duration-200'>GitHub</a></li>
                <li><a href="https://github.com/Edgardosilva/LinkSlashFront" target='_blank' rel='noopener noreferrer' className='text-white/60 hover:text-violet-300 transition-colors duration-200'>Repositorio</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;