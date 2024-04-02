import Nav from "@Components/Nav";
import "@styles/global.css";
import Footer from "@Components/footer";

export const metadata = {
  title: "Edukraft",
  description: "Study Abroad",
};
function RootLayout({ children }) {
  return (
    <html lang="">
      <body>
        <main className="">
          <Nav /> 
          {children}
          <Footer/> 
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
