import './globals.css'

export const metadata = {
  title: 'JUDAION Studios | Client Extraction Portal',
  description: 'Client brief extraction portal for JUDAION Studios brand architecture services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}