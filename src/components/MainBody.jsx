import React from 'react';
import InputBar from './InputBar';


const MainBody = () => {
    return (
        <div className='h-[400px] flex flex-col justify-center'>
            <section className='flex flex-col items-center'>
                <div className='flex items-center gap-6'>
                    <img src='linkslashLogo.jpg' alt='logo' className='w-28 rounded-xl hidden md:block'/>
                    <div className='flex flex-col justify-around h-28'>
                        <h1 className=' text-6xl font-bold'>LinkSlash</h1>
                        <h3 className=' text-[#828282] '>Tu herramienta para enlaces más cortos y prácticos</h3>
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