import React from "react"
import "./Privacy.css"

export default function Privacy() {
    return (
        <div className="privacy-page">
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p className="updated">Last updated: March 2026</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        This Privacy Policy describes how we collect , use , store, and protect personal and finnacial information when you apply for or use our loan services. by using this platform, you must consent to the practices described in this policy
                    </p>
                </section>

                <section>
                    <h2>2. Information We collect </h2>
                    <ul>
                        <li>Personal details (fullname, email address and phone number)</li>
                        <li>Identification information required for loan processing</li>
                        <li>Financial information (income details, bank account data)</li>
                        <li>Loan application and repayment history</li>
                        <li>Technical data (IP address, browser type and device information)</li>
                    </ul>
                </section>

                <section>
                    <h2>3. How we use your information</h2>
                    <ul>
                        <li>To evaluate loan eligibility and creditworthiness</li>
                        <li>To process loan applications and repayments</li>
                        <li>To verify identity and prevent fraud</li>
                        <li>To comply with regulatory and legal obligations</li>
                        <li>To communicate important account and loan updates</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data storing and Disclosure</h2>
                    <p>we do not sell your personal data. Information may be shared with financial institutions , payment processors,credit bereaus and regulatory authorties strictly for loan processing compliance and </p>

                </section>
            </div>

        </div>
    );
};