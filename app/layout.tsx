import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runway Calculator — Model Your Startup Burn Rate',
  description: 'Calculate cash runway based on hiring plans and growth scenarios. Built for startup founders and CFOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="75727092-da3f-4e2a-8ce0-dba0796f56e5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
