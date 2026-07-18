import { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  ContactRound,
  FileText,
  Lock,
  Mail,
  Phone,
  Send,
  Sparkles,
  UploadCloud,
  User,
} from "lucide-react";
import Reveal from "../common/Reveal";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import { ROLES } from "./careersData";
import "./CareersApplicationForm.css";

const STEPS = [
  { icon: ContactRound, title: "Your Details", text: "Name, phone and email so we can reach you.", tone: "primary" },
  { icon: Sparkles, title: "Your Role", text: "Tell us which position suits you best.", tone: "secondary" },
  { icon: UploadCloud, title: "Your Resume", text: "Upload your latest resume as PDF, DOC or DOCX.", tone: "orange" },
];

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 150, top: "8%", left: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 28, top: "16%", right: "5%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "18%", left: "6%", speed: 0.42, float: 14, dur: 5, opacity: 0.7 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "24%", right: "8%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
];

export default function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleFileChange(e) {
    setFileName(e.target.files?.[0]?.name || "");
  }

  return (
    <section className="cr-apply" id="apply">
      <FloatingShapes items={SHAPES} />

      <div className="container cr-apply__grid">
        <Reveal as="div" x={-30} y={0} className="cr-apply__intro">
          <span className="cr-apply__ribbon">
            <Sparkles size={14} strokeWidth={2.2} />
            We&rsquo;re Hiring
          </span>
          <h2>Take the First Step Toward Your Career at Kayo</h2>
          <p className="cr-apply__lead">
            Fill out the form and take the first step toward a deeply rewarding career in early
            childhood education. Three quick steps — that&rsquo;s all it takes.
          </p>

          <ol className="cr-apply__steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`cr-apply__step cr-apply__step--${s.tone}`}>
                <span className="cr-apply__step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="cr-apply__step-icon">
                  <s.icon size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="cr-apply__privacy">
            <Lock size={16} strokeWidth={2} />
            All information shared is kept strictly confidential and used solely for recruitment
            purposes.
          </div>
        </Reveal>

        <Reveal as="div" x={30} y={0} delay={0.1} className="cr-apply__form-wrap">
          <span className="cr-apply__stack" aria-hidden="true" />
          <div className="cr-apply__form-card">
            <span className="cr-apply__tape" aria-hidden="true" />
            {submitted ? (
              <div className="cr-apply__success">
                <CheckCircle2 size={46} strokeWidth={1.5} />
                <h3>Application Received!</h3>
                <p>
                  Thank you for applying to Team Kayo. Our recruitment team will review your details
                  and reach out to you shortly.
                </p>
              </div>
            ) : (
              <form className="cr-apply__form" onSubmit={handleSubmit}>
                <div className="cr-apply__form-head">
                  <h3>Application Form</h3>
                  <span className="cr-apply__form-hint">Just a few details &mdash; we&rsquo;ll do the rest &#9997;</span>
                </div>

                <label className="cr-apply__field" data-tone="primary">
                  <span className="cr-apply__field-icon">
                    <User size={18} strokeWidth={1.9} />
                  </span>
                  <span className="cr-apply__field-body">
                    <span className="cr-apply__field-label">Your Name</span>
                    <input type="text" name="fullName" required placeholder="Your full name" />
                  </span>
                </label>

                <label className="cr-apply__field" data-tone="secondary">
                  <span className="cr-apply__field-icon">
                    <Phone size={18} strokeWidth={1.9} />
                  </span>
                  <span className="cr-apply__field-body">
                    <span className="cr-apply__field-label">Your Phone</span>
                    <input type="tel" name="phone" required placeholder="+91 00000 00000" />
                  </span>
                </label>

                <label className="cr-apply__field" data-tone="gold">
                  <span className="cr-apply__field-icon">
                    <Mail size={18} strokeWidth={1.9} />
                  </span>
                  <span className="cr-apply__field-body">
                    <span className="cr-apply__field-label">Your Email</span>
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </span>
                </label>

                <label className="cr-apply__field" data-tone="orange">
                  <span className="cr-apply__field-icon">
                    <Briefcase size={18} strokeWidth={1.9} />
                  </span>
                  <span className="cr-apply__field-body">
                    <span className="cr-apply__field-label">Select Designation</span>
                    <select name="designation" required defaultValue="">
                      <option value="" disabled>
                        Choose a role
                      </option>
                      {ROLES.map((r) => (
                        <option key={r.title} value={r.title}>
                          {r.title}
                        </option>
                      ))}
                    </select>
                  </span>
                </label>

                <label className="cr-apply__field cr-apply__field--file" data-tone="primary">
                  <span className="cr-apply__field-icon">
                    <UploadCloud size={18} strokeWidth={1.9} />
                  </span>
                  <span className="cr-apply__field-body">
                    <span className="cr-apply__field-label">Upload Resume</span>
                    <span className="cr-apply__upload">
                      <span className="cr-apply__upload-btn">
                        <UploadCloud size={16} strokeWidth={1.9} />
                        {fileName ? "Change File" : "Choose File"}
                      </span>
                      <span className="cr-apply__upload-name">
                        {fileName ? (
                          <>
                            <FileText size={14} strokeWidth={2} /> {fileName}
                          </>
                        ) : (
                          "PDF, DOC or DOCX"
                        )}
                      </span>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                      />
                    </span>
                  </span>
                </label>

                <Magnetic strength={0.2} className="cr-apply__submit-wrap">
                  <button type="submit" className="btn btn-primary cr-apply__submit">
                    Submit Application <Send size={17} />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
