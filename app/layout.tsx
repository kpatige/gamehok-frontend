import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#001107]">
        <div className="mx-auto min-h-screen w-full max-w-[390px] bg-[#001107]">
          {children}
        </div>
      </body>
    </html>
  );
}