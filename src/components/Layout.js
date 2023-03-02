import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;