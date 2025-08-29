/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

interface TOSProps {
  data: any;
}
const TOS: React.FC<TOSProps> = ({ data }) => {
// const TOS: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 h-auto terms-content font-sans">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content?.[0]?.page_content }}
      ></div>
      {/* <h2 className="text-2xl font-semibold text-[#324a8d] mb-4">
        Terms and Conditions
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Last Updated: September 25, 2024
      </p>

      <ul className="list-none pl-5 space-y-4 pb-10 pt-10">
        <li>
          <strong className="font-semibold">1. Acceptance of Terms</strong>
          <ul className="list-none pl-5 mt-2 space-y-2 font-body">
            <li>
              These Terms and Conditions (“Terms”) govern your use of the
              website www.mergerlawyer.com (“Website”), owned and operated by
              Empowering Legal Solutions PC, a California professional
              corporation (“Website Owner,” “we,” “us,” or “our”). By accessing
              or using this Website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms.
            </li>
            <li>
              If you do not agree to these Terms, you must not use the Website.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">2. Use of the Website</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              The Website and its contents are provided for general
              informational purposes only and do not constitute legal or
              professional advice. Use of this Website does not create an
              attorney-client relationship between you and Empowering Legal
              Solutions PC or any of its stockholders, directors, officers,
              employees, agents, or representatives.
            </li>
            <li>
              You agree to use the Website only for lawful purposes and in a
              manner consistent with these Terms.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">
            3. Intellectual Property Rights
          </strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              All content on the Website, including text, graphics, images,
              logos, and other materials, is protected by copyright, trademark,
              trade secret, and other intellectual property rights owned by or
              licensed to the Website Owner or any of its stockholders,
              directors, officers, employees, agents, or representatives.
              Unauthorized use of any content may violate copyright, trademark,
              and other laws.
            </li>
            <li>
              You are granted a limited, non-exclusive, non-transferable license
              to access and use the Website for your personal, non-commercial
              use. You may not modify, reproduce, distribute, display, perform,
              or otherwise use any content without our prior written consent.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">4. Prohibited Uses</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              You may not use the Website in any manner that could disable,
              overburden, damage, or impair the Website or interfere with any
              other party’s use of the Website.
            </li>
            <li>
              You are expressly prohibited from copying, modifying,
              distributing, displaying, performing, or transmitting any content
              of the Website, or creating derivative works from any content on
              the Website, for commercial purposes without express written
              permission from the Website Owner.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">5. User Submissions</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              By submitting your contact information or other materials through
              this Website, you grant Empowering Legal Solutions PC, and its
              stockholders, directors, officers, employees, agents, and
              representatives, a perpetual, irrevocable, worldwide,
              non-exclusive, royalty-free, fully transferable license to use,
              reproduce, distribute, display, and create derivative works of
              your submission in any media, for any purpose, including
              commercial purposes, without compensation to you.
            </li>
            <li>
              We may use the information you provide to contact you with
              promotional materials, offers, and information about our legal
              services.
            </li>
            <li>
              You are responsible for any use of the Website by your advisors,
              representatives, or any third party acting on your behalf. You
              agree to ensure that all such parties comply with these Terms, and
              you are liable for any breaches by these parties, even if such
              breaches occur without your direct knowledge or consent.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">6. Disclaimer of Warranties</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              Your use of the website is at your own risk. The website and all
              content are provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without any warranties of any kind, either
              express or implied. Empowering legal Solutions PC, its
              stockholders, directors, officers, employees, agents, and
              representatives expressly disclaim all warranties, including any
              implied warranties of merchantability, fitness for a particular
              purpose, non-infringement, or that the website will be
              uninterrupted, secure, or error-free.
            </li>
            <li>
              We make no representations or warranties regarding the accuracy,
              reliability, or completeness of the content provided through the
              website or that any defects will be corrected. You assume full
              responsibility for your use of the website, including any costs
              associated with servicing, repair, or correction of equipment or
              data arising from your use.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">7. Limitation of Liability</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              To the max extent permitted by law, in no event shall Empowering
              Legal Solutions PC, its stockholders, directors, officers,
              employees, agents, or representatives be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              but not limited to loss of revenue, profits, goodwill, use, data,
              or other intangible losses resulting from your use of the website.
            </li>

            <li>
              If, notwithstanding these limitations, Empowering legal Solutions
              PC or its stockholders, directors, officers, employees, agents, or
              representatives are found liable for any damage or loss arising
              out of or in any way connected with your use of the website, such
              liability shall in no event exceed the greater of the amount you
              paid to the website owner for accessing the website or $100.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">8. Indemnification</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              You agree to indemnify, defend, and hold harmless Empowering Legal
              Solutions PC, its stockholders, directors, officers, employees,
              agents, and representatives from and against any claims,
              liabilities, damages, judgments, awards, losses, costs, expenses,
              or fees (including reasonable attorneys&apos; fees) arising out of
              or relating to your violation of these Terms or your use of the
              Website, including any actions taken by your advisors or other
              representatives.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">
            9. Governing Law and Dispute Resolution
          </strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              These Terms are governed by the laws of the State of California,
              without regard to conflict of law principles. Any disputes arising
              out of or related to these Terms shall be resolved exclusively
              binding arbitration administered by the American Arbitration
              Association under its commercial arbitration rules in California.
              The arbitration shall be conducted by a single arbitrator, and
              judgment on the award rendered by the arbitrator may be entered in
              any court having jurisdiction.
            </li>
            <li>
              The arbitrator shall not have authority to award punitive damages,
              incidental, indirect, or consequential damages, or any damages not
              expressly allowed by these Terms. Each party shall bear its own
              costs associated with the arbitration, regardless of the outcome.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">10. Changes to Terms</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your continued use of the Website following
              any such changes constitutes your acceptance of the new Terms.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">11. Miscellaneous</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              These Terms constitute the entire agreement between you and
              Empowering Legal Solutions PC regarding your use of the Website
              and supersede any prior agreements or understandings, whether
              written or oral, relating to such subject matter.
            </li>
            <li>
              If any provision of these Terms is held invalid or unenforceable,
              such provision shall be deemed severable and shall not affect the
              validity and enforceability of the remaining provisions.
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-semibold">12. Contact Information</strong>
          <ul className="list-circle pl-5 mt-2 space-y-2 font-body">
            <li>
              If you have any questions, contact us at{" "}
              <a
                href="mailto:contact@empowering.legal"
                className="text-[#324a8d] underline"
              >
                contact@empowering.legal
              </a>
              .
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
};

export default TOS;
