import "../styles/globals.css";
import Sidebar from "~/components/Sidebar";
import Navbar from "~/components/Navbar";
// @TODO CHANGE THE METADATA
export const metadata = {
  title: "Cop",
  description: "The place cop some stuff",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <body className="flex h-full flex-row bg-primary">
          <Sidebar />
          <main className="flex flex-col">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
export default RootLayout;
