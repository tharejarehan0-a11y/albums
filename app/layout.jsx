import "./globals.css";

export const metadata = {
  title: "Albums | Rehan",
  description: "Explore my music u know",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
       <link rel="shortcut icon" href="/player.png" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col bg-black overflow-x-hidden">{children}</body>
    </html>
  );
}
