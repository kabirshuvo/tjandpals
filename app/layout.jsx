
import "../styles/globals.css";
export const metadata = {
  title: "Tj and Pals",
  description: "Discover & Share the new approch of child education",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient " />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
