import "../app/globals.css";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

export const metadata = {
  title: "My App",
  description: "A Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}