import React from 'react';

const Navbar = ()=>{
    return (
        <div className='flex items-center justify-between p-4 w-full absolute z-[100]'>
            <h1 className='text-red-600 text-2xl cursor-pointer font-bold'>NETFLIX</h1>
            <div>
                <button className='text-white pr-4'>Sing In</button>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sing Up</button>
            </div>
        </div>
    );
}

export default Navbar;