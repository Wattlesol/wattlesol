import Footer from "./components/common/Footer"
import Header from "./components/common/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
