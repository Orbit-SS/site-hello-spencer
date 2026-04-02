import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-border">
        <span className="text-lg font-semibold tracking-tight">Orbit Sites</span>
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <Button size="sm">Get Started</Button>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-24 gap-6">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Now in MVP — Early Access
        </span>
        <h1 className="text-5xl font-bold tracking-tight max-w-2xl leading-tight">
          Hello Specer,<br />welcome to Orbit Sites.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          The fastest way to launch beautiful, production-ready websites. No friction, no fuss — just ship.
        </p>
        <div className="flex gap-3 mt-2">
          <Button size="lg">Start Building</Button>
          <Button size="lg" variant="outline">See a Demo</Button>
        </div>
      </main>

      {/* Features */}
      <section id="features" className="border-t border-border px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-12">Everything you need to launch</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { title: "Instant Deploy", desc: "Push to ship. Your site goes live in seconds with zero config." },
              { title: "Beautiful by Default", desc: "Polished components and typography right out of the box." },
              { title: "Built to Scale", desc: "Start fast and grow confidently — infrastructure that keeps up." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-border p-6 flex flex-col gap-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border px-8 py-20 bg-muted/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Simple pricing</h2>
          <p className="text-muted-foreground mb-12">Free during MVP. Paid plans coming soon.</p>
          <div className="inline-flex flex-col items-center rounded-2xl border border-border bg-background px-12 py-10 gap-4">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">MVP Access</span>
            <span className="text-5xl font-bold">$0</span>
            <span className="text-muted-foreground text-sm">No credit card required</span>
            <Button className="mt-2 w-full">Claim Free Access</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Orbit Sites. All rights reserved.
      </footer>
    </div>
  );
}
