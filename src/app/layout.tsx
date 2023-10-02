'use client';
import './globals.css'

import { Inter } from 'next/font/google'
import Steps from './(components)/Steps/page'
// import { Metadata } from 'next';
import Pagination from './(components)/Pagination/page';

const inter = Inter({ subsets: ['latin'] })

import { store } from './store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <head>

                </head>
                <body className=" ">
                    <main className=' flex items-center justify-between w-full overflow-hidden h-screen bg-[#b8ff65]'>
                        <div id='ly' className='md:w-[1300px] w-full mdh:h-[90%] md:h-[55%] h-full mx-3 xl:mx-auto border flex justify-between bg-[#f3f3f3] rounded-xl p-1'>
                            <Steps />
                            <div className='w-full h-full relative flex flex-col bg-transparent'>
                                <div className=' overflow-auto w-full h-full flex flex-col'>
                                    {children}
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        </Provider>
    )
}
