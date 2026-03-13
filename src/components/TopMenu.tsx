import styles from '@/components/topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu(){
    const session = await getServerSession(authOptions)
    return (
        <div className="
            h-[50px] bg-white fixed 
            top-0 left-0 right-0 z-40 
            border border-gray-200
            flex flex-row-reverse justify-start
        ">
            <Image src={'/img/logo.png'} 
                alt='logo'
                className="h-full w-auto relative"
                width={0} height={0}
                sizes='100vh'
            />
            <TopMenuItem title='Booking' pageRef='booking'/>
            <div>
                {
                    session ? (
                        <Link href='/api/auth/signout'>
                            <div className='w-[120px] h-full !text-black
                                fixed top-[11] left-0 text-center 
                                font-mono text-14px font-bold'>
                                Sign-Out</div>
                        </Link>
                    ) : (
                        <Link href='/api/auth/signin'>
                            <div className='w-[120px] h-full !text-black
                                fixed top-[11] left-0 text-center 
                                font-mono text-14px font-bold'>
                                Sign-In</div>
                        </Link>
                    )
                }
            </div >
             
        </div>
    );
}