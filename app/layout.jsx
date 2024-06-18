'use client'
import Nav from "@Components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import "@styles/global.css";
import Footer from "@Components/footer";
import { Poppins } from "next/font/google";
import "@styles/mystyle.css";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import toastr from "toastr"
const poppins_style = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: ["--font-poppins"],
});

// export const metadata = {
//   title: "Edukraft",
//   description: "Study Abroad",
// };  
function RootLayout({ children }) {
  return (
    <html lang="">
      <body className={poppins_style.className}>
        <main className="">
          
          <Nav />
          {children}
          <Footer />
        </main>
        <ToastContainer/>
        <toastr/>
      </body>
    </html>
  );
}

export default RootLayout;
