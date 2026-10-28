/** The bare address only sends the visitor on to the Arabic site (a static site has no server redirect). */
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
