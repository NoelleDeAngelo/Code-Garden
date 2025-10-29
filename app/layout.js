import { DM_Serif_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const fontSerifDisplay = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const fontWorkSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});


export const metadata = {
  title: "Code Garden",
  description: "A place to grow your coding skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontSerifDisplay.variable} ${fontWorkSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
