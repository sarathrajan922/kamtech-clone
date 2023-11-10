import React from 'react';

const Navbar:React.FC = ()=>{
    return (
        <nav>
            <div className='h-10vh bg-gray-500 flex justify-between text-white lg:py-5 px-20 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>Logo</span>
                </div>
                <div className='flex'>
                    <div > 
                        <ul className='flex justify-evenly gap-4'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        </ul>
                  </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;