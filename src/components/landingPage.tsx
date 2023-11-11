import React from 'react';

const LandingPage:React.FC = ()=>{
    return (
        <section>
            <div className='w-full flex justify-between bg-slate-400 px-20 py-5'>
                <div className='flex items-center w-1/2 bg-slate-600'>
                        left side
                </div>
                <div className='flex items-center w-1/2 bg-slate-600'>
                        right side
                </div>
            </div>
        </section>
    )
}

export default LandingPage;