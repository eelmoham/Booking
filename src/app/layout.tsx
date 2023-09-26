import './globals.css'
import type { Metadata }
    from 'next'
import { Inter } from 'next/font/google'
import Steps from './(components)/Steps/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                
            </head>
            <body className="">
                <main className=' flex items-center justify-between w-full overflow-hidden h-screen bg-[#b8ff65]'>
                    <div className='md:w-[1200px] w-full md:h-[50%] h-full m-auto border flex justify-between bg-[#f3f3f3] rounded-xl p-1'>
                        <Steps />
                        <div className='overflow-auto w-full'>

                            {children}
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}
