import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <main className="min-h-screen pt-12 pb-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-16 border border-border/50 shadow-card">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 tracking-tight">
        Privacy <span className="text-gradient">Policy</span>
      </h1>

      <div className="space-y-12 text-muted-foreground font-medium leading-relaxed text-lg">
        <p>
          <strong className="text-foreground font-bold">["MargCred", "we" or "us"]</strong>{" "}
          is committed to protecting your information and privacy. This Privacy Policy is designed to help you understand how we may collect, process, store and use the information you provide to us and to assist you in making informed decisions while using our Service.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">1. Acceptance of this Policy</h2>
          <p>You are advised to read this Privacy Policy carefully. By accepting this Privacy Policy and the Terms and Conditions of Use, a User expressly consents to <strong className="text-primary font-bold">"MargCred"</strong> collection, storage, use, and disclosure of his information as described herein.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">2. Applicability of this Policy</h2>
          <p>This Privacy Policy applies to any information of the user when he accesses/visits our Sites or uses our Services and does not apply to online platforms or services that <strong className="text-primary font-bold">"MargCred"</strong> do not own or control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">3. Changes to this Policy</h2>
          <p>We may revise this Privacy Policy from time to time to reflect changes to our business, the Sites or Services, or applicable laws. The revised Privacy Policy will be effective as of the published effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">4. Data Retention Policy</h2>
          <p><strong className="text-primary font-bold">"MargCred"</strong> ensures secure storage of user data and retains transactional records as per regulatory compliance. Users can request data deletion as per our privacy policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">5. Definitions</h2>
          <ul className="space-y-4">
            <li className="bg-secondary p-5 rounded-2xl border border-border/50"><strong className="text-foreground font-bold">"MargCred"</strong> includes its affiliates and subsidiaries.</li>
            <li className="bg-secondary p-5 rounded-2xl border border-border/50"><strong className="text-foreground font-bold">"MargCred" Account/Services</strong> means services offered by "MargCred" in connection with your account.</li>
            <li className="bg-secondary p-5 rounded-2xl border border-border/50"><strong className="text-foreground font-bold">Personal Data/Information</strong> means personal information that can identify a person.</li>
            <li className="bg-secondary p-5 rounded-2xl border border-border/50"><strong className="text-foreground font-bold">Process</strong> means any method we handle Personal Data whether or not by automated means.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">6. Information We Collect</h2>
          <p>We collect information necessary to render services, including name, address, contact, and KYC details.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">7. Storage of Personal Information</h2>
          <p>We retain personal information as required by law and legitimate business interests.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">8. Use of Personal Information</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-5">
            {["Providing and improving services", "Completing transactions and settlements", "Tailoring user experience", "Resolving disputes and troubleshooting", "Detecting and preventing fraud", "Complying with legal requirements"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">9. Information Security</h2>
          <p><strong className="text-primary font-bold">"MargCred"</strong> employs stringent security measures. Sensitive information is encrypted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4 border-l-4 border-primary pl-4">10. Contact Us</h2>
          <p>For queries regarding this Privacy Policy, contact <span className="text-foreground font-bold">+91 7965258132</span>.</p>
        </section>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
