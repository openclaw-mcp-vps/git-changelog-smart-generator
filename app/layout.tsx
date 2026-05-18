import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChangelogAI — AI-Generated Changelogs from Git Commits & PRs',
  description: 'Automatically generate customer-facing changelogs from your GitHub or GitLab commits and pull requests using AI. Save hours of manual work every release.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c03d451b-e274-4b66-9510-8353a7b537a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
