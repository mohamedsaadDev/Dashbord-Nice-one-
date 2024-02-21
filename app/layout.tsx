import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_components/header/page'
import { AppWrapper} from "./_context/index"
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Dashbord',
  description: 'A dashboard is a user interface that provides a centralized overview of important data and information. It allows users to easily examine performance and monitor events, facilitating effective decision-making. The dashboard organizes diverse data into visual charts and statistics, enhancing understanding of context and enabling efficient data analysis.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='messge-mobile hidden'>
          <p>You are currently unable to access the website from your mobile phone.</p>
        </div>
        <div className='flex m-3 wraaper-app'>
          <Header/>
          <div className='wraaper-content-dashbaord h-95vh overflow-x-auto'>
          <AppWrapper>
            {children}
          </AppWrapper>
          </div>
        </div>
        </body>
    </html>
  )
}
