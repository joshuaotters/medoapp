import { Inter } from "next/font/google";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeDo",
  description: "A productivity app for your everyday tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar/>
        {children}
        </body>
    </html>
  );
}
