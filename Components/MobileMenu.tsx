import React from 'react'
import router from 'next/router'

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className='bg-black w-56 absolute top-9 left-0 py-5 flex-col border-2 border-gray'>
            <div className='flex flex-col gap-4'>
                <div className='px-3 text-center text-white hover:underline w-full '>
                    <li className='list-none text-left'>Home</li>
                </div>
                <div className='px-3 text-center text-white hover:underline w-full '>
                    <li className='list-none text-left'>Series</li>
                </div>
                <div className='px-3 text-center text-white hover:underline w-full '>
                    <li className='list-none text-left'>New & Popular</li>
                </div>
                <div className='px-3 text-center text-white hover:underline w-full '>
                    <li className='list-none text-left' onClick={() => router.push('/myList')}>My List</li>
                </div>
                <div className='px-3 text-center text-white hover:underline w-full '>
                    <li className='list-none text-left'>Browse by languages</li>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu