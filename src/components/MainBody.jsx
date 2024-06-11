import React from 'react';
import InputBar from './InputBar';


const MainBody = () => {
    return (
        <div className='h-[400px] flex flex-col justify-center'>
            <section className='flex flex-col items-center'>
                <h1 className=' text-6xl font-bold mb-6'>LinkSlash</h1>
                <h3 className=' text-[#828282] '>Tu herramienta para enlaces más cortos y prácticos</h3>
            </section>
            <section>
                <InputBar />
            </section>
        </div>
    );
};

export default MainBody;