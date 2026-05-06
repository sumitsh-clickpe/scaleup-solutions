const TermsAndConditions = () => (
  <main className="min-h-screen pt-12 pb-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-16 border border-border/50 shadow-card">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 tracking-tight">
        Terms & <span className="text-gradient">Conditions</span>
      </h1>

      <div className="space-y-12 text-muted-foreground font-medium leading-relaxed text-lg">
        <p>
          These terms govern your use of <strong className="text-foreground font-bold">"MargCred"</strong> services including advertising, marketing, and related features. Please read them carefully.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">General</h2>
          <p>This website and app are operated by "MargCred". By using the Services, you agree to these terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">Eligibility</h2>
          <p>You must be <strong className="text-primary font-bold">18+</strong> and legally capable to form binding contracts in India, or a registered entity operating in India.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">Registration</h2>
          <p>Provide true, accurate, current and complete information. "MargCred" may reject or terminate access for violations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">User Obligations</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {["Provide accurate information", "Maintain required licenses", "Comply with applicable laws", "Maintain account security", "Bear applicable taxes"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-secondary p-5 rounded-2xl border border-border/50 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">Payment Terms - Fees</h2>
          <p>Convenience fees are disclosed prior to transaction and are <strong className="text-foreground font-bold">non-refundable</strong>, except for technical failures.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">Contact Information</h2>
          <p>For queries, contact <span className="text-foreground font-bold">+91 7965258132</span>.</p>
        </section>
      </div>
    </div>
  </main>
);

export default TermsAndConditions;
