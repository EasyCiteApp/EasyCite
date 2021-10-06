
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto">
      <NavBar/>
      <main className="mt-14">{children}</main>
      <Footer/>
    </div>
  )
}