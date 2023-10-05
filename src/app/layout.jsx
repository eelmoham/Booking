'use client';
import './globals.css'

import { Inter } from 'next/font/google'
import Steps from './(components)/Steps/page'
import Pagination from './(components)/Pagination/page';

const inter = Inter({ subsets: ['latin'] })

import { store } from './store'
import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation';

var etapsData = {
    "Packs": "Pickup a pack",
    "": "Pickup a pack",
    "Hostel": "Choose a room",
    "Days": "Select Date",
    "CheckOut": "Your informations",
    "facture": "Confirmation",
    "more": ""
}

export default function RootLayout({ children }) {
    const Pathname = usePathname()

    return (
        <Provider store={store}>
            <html lang="en">
                <head>

                </head>
                <body className=" ">
                    <main className=' flex items-center justify-between w-full overflow-hidden h-screen bg-[#b8ff65]'>
                        <div id='ly' className='md:w-[1300px] w-full mdh:h-[90%] md:h-[55%] h-full mx-3 xl:mx-auto border flex justify-between bg-[#fff] rounded-xl p-1'>
                            <Steps />
                            <div className='w-full h-full relative flex flex-col bg-transparent'>
                                <header className='flex justify-center items-center w-full bg-white pb-3 pt-1'>
                                    {
                                        etapsData[Pathname.substring(1).split('/')[0]]
                                    }
                                </header>
                                <div className=' overflow-auto w-full h-full flex flex-col bg-[#f3f3f3]'>
                                    {children}
                                </div>
                                
                                <Pagination Pathname={Pathname}/>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        </Provider>
    )
}
