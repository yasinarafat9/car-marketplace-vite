import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, isSignedIn } = useUser();
    return (
        <div className='flex justify-between items-center shadow-sm p-5'>
            <Link to={'/'}>
                <img src="/logo.svg" width={150} height={100} alt="" />
            </Link>

            <ul className='hidden md:flex gap-16'>
                <Link to={'/'}>
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                </Link>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            </ul>

            {isSignedIn ?
                <div className='flex items-center gap-5'>
                    <UserButton />
                    <Link to={'/profile'}>
                        <Button >Submit Listing</Button>
                    </Link>
                </div>
                :
                <SignInButton mode='modal' forceRedirectUrl='/'>
                    <Button >Sign In</Button>
                </SignInButton>
            }
        </div>
    );
};

export default Header;