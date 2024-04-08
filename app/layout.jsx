import Nav from "@Components/Nav";
import "@styles/global.css";
import Footer from "@Components/footer";
import { Poppins } from "next/font/google";

const poppins_style = Poppins({
  subsets: ["latin"],
  weight: ['400' ,'500'],
  variable: ["--font-poppins"],
});

export const metadata = {
  title: "Edukraft",
  description: "Study Abroad",
};
function RootLayout({ children }) {
  return (
    <html lang="">
      <body className={poppins_style.variable}>
        <main className="">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
