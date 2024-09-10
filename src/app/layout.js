import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>ProVest</title>
        <meta name="description" content="Copyright by JENGT" />
      </head>
      <body>
        <main className="bg-[color: var(--background)] h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
