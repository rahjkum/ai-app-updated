export const metadata = {
  title: 'AI Song Generator',
  description: 'Generate songs using Together AI and ElevenLabs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
