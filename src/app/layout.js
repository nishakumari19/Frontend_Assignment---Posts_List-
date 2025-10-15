
import "./globals.css";

export const metadata = {
  title: "Posts Assigment",
  description: "ReactJS Posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
