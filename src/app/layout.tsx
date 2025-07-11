import "./globals.css";

export const metadata = {
  title: "Minhazul Islam Choudhury - Portfolio",
  description: "Portfolio of Minhazul Islam Choudhury, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
