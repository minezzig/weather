import "./globals.css";

export const metadata = {
  title: "LivelyWeather",
  description: "Look up current temperature and weather anywhere in the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/images/icon.svg" sizes="any" />
        {children}
      </body>
    </html>
  );
}
