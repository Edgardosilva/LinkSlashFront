import React from 'react';
import InputBar from './InputBar';


const MainBody = () => {
    return (
        <div className='flex-grow flex flex-col justify-center py-10 md:py-0'>
            <section className='flex flex-col items-center px-4'>
                <div className='flex items-center gap-6'>
                    <img src='linkslashLogo.jpg' alt='logo' className='w-28 rounded-xl hidden md:block'/>
                    <div className='flex flex-col justify-around gap-2 md:gap-0 md:h-28'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white'>Link<span className='text-violet-400'>Slash</span></h1>
                        <h3 className='text-white/50 text-sm md:text-base'>Tu herramienta para enlaces más cortos y prácticos</h3>
                    </div>
                </div>
            </section>
            <section>
                <InputBar />
            </section>
        </div>
    );
};

export default MainBody;