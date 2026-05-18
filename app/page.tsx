export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI-Generated Changelogs from{' '}
          <span className="text-[#58a6ff]">Git Commits &amp; PRs</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub or GitLab, and let AI analyze your commits and pull requests to produce polished, customer-facing changelogs — automatically, every release.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['GitHub & GitLab', 'Native OAuth integration'], ['AI Categorization', 'Features, fixes, breaking changes'], ['Instant Drafts', 'Dashboard or webhook delivery']].map(([title, desc]) => (
            <div key={title} className="p-4 rounded-xl bg-[#161b22] border border-[#21262d]">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate changelogs for your SaaS.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited repositories',
              'GitHub & GitLab OAuth',
              'AI-powered categorization',
              'Customer-facing changelog drafts',
              'Webhook delivery',
              'Dashboard access',
              'Email support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now — $19/mo
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI generate changelogs?',
              a: 'We fetch your commits and PR descriptions via the GitHub or GitLab API, then send them to OpenAI to categorize changes into features, bug fixes, and breaking changes — producing clean, customer-friendly release notes automatically.'
            },
            {
              q: 'Which Git providers are supported?',
              a: 'GitHub and GitLab are fully supported via OAuth. You can connect multiple repositories from either provider under one account.'
            },
            {
              q: 'How do I receive the generated changelogs?',
              a: 'Changelogs appear in your dashboard as editable drafts. You can also configure a webhook to push them directly to your own systems or publishing pipeline.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl bg-[#161b22] border border-[#21262d] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  )
}
