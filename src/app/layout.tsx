import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow pb-12 md:pb-0">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
