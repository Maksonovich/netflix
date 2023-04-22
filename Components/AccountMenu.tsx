import { signOut } from 'next-auth/react'
import React from 'react'
import router from 'next/router'

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

    if (!visible) {
        return null
    }

    return (
        <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-gray border'>
            <div className='flex flex-col gap-3'>
                <div className='px-3 group/item flex flex-col gap-3 items-center w-full'>
                    <img className='w-8 rounded-md' src="/images/default-blue.png" alt="" />
                    <p className='text-white text-sm hover/item:underline'>
                        <li className='text-left list-none' onClick={() => router.push('/profiles')}>Username</li>
                    </p>
                    <hr className='bg-gray-600 border-0 h-px my-4' />
                    <div onClick={() => signOut()} className='px-3 text-center text-white text-sm hover:underline'>
                        <li className='text-left list-none'>Sign out of Netflix</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountMenu