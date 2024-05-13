import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
export default function Layout() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar />
      <Outlet />

      <Toaster
        position='top-center'
        reverseOrder={false}
      />
    </div>
  )
}
