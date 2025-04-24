import FlyoutMenu from "@/components/navigation/FlyoutMenu";
import "./globals.css";
import { Providers } from "./providers";
import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow md:pb-0">
            <FlyoutMenu />
            <DynamicBreadcrumb />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
