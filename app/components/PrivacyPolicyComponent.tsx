/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

interface PrivacyProps {
  data: any;
}

const PrivacyPolicyComponent: React.FC<PrivacyProps> = ({ data }) => {
  // const PrivacyPolicyComponent: React.FC = () => {

  return (
    <>
      <div
        className="max-w-6xl mx-auto h-auto py-16"
        dangerouslySetInnerHTML={{ __html: data?.content?.[0]?.page_content }}
      ></div>
      {/* <div className="max-w-6xl mx-auto h-auto py-16">
      <h2 className="font-sans text-2xl font-semibold text-[#324a8d] mb-4">
        Privacy Policy
      </h2>
      <p className="font-sans text-sm text-gray-500 mb-4">
        Last Updated: September 25, 2024
      </p>
      <p className="mt-4 font-body">
        Empowering Legal Solutions PC, a California professional corporation,
        and any of its stockholders, directors, officers, employees, agents, or
        representatives (“we,” “us,” or “our”), respect your privacy and are
        committed to protecting it through our compliance with this policy.
      </p>
      <p className="font-body">
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website
        sellyourstartup.com (“Website”). By using this Website in any way, or by
        accepting the Terms and Conditions, you agree to comply with this
        Privacy Policy. If you do not agree with the terms of this policy,
        please do not access the Website.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
      <p className="font-body">
        This Website is intended for individuals who are 18 years of age or
        older and who can enter into legally binding contracts under applicable
        law. By using the Website, you represent that you meet these eligibility
        requirements.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
      <h3 className="text-lg font-semibold mt-4">Personal Data:</h3>
      <p className="font-body">
        We may ask you to provide us with certain personally identifiable
        information, including your name, email address, phone number, and any
        message you include when contacting us.
      </p>
      <h3 className="text-lg font-semibold mt-4">Usage Data:</h3>
      <p className="font-body">
        We may automatically collect information about how you access and use
        the Website, including your IP address, browser type, operating system,
        access times, and the pages you have viewed directly before and after
        accessing the Website. We track this information to understand trends,
        manage the Website, and enhance user experience.
      </p>
      <h3 className="text-lg font-semibold mt-4">Anonymous Website Visits:</h3>
      <p className="font-body">
        In general, you can visit our Website without revealing any personal
        information. However, we may track the domains from which people visit,
        analyze data gathered from these visits for trends and statistics, and
        discard the gathered data once it is analyzed. This data is not linked
        to any personal information.
      </p>
      <h3 className="text-lg font-semibold mt-4">
        Cookies and Tracking Technologies:
      </h3>
      <p className="font-body">
        We use cookies, web beacons, tracking pixels, and other tracking
        technologies to help customize the Website and improve your experience.
        These technologies may collect non-identifiable information, such as
        browsing activity, and are used to analyze trends, administer the site,
        track users’ movements, and gather demographic information. You can
        manage your cookie preferences through your browser settings; however,
        disabling cookies may affect your ability to use some features of the
        Website.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        3. How We Use Your Information
      </h2>
      <p className="mt-2 mb-2">
        We use the information we collect or receive to:
      </p>
      <ul className="list-disc list-inside space-y-2 font-body">
        <li>Provide, operate, maintain, and improve the Website.</li>
        <li>
          Respond to your inquiries and provide you with requested information
          or services.
        </li>
        <li>
          Send you promotional emails, newsletters, legal updates, and marketing
          communications about our services, unless you opt out of receiving
          such communications.
        </li>
        <li>
          Monitor and analyze usage and trends to improve your experience with
          the Website.
        </li>
        <li>Protect against fraudulent, unauthorized, or illegal activity.</li>
        <li>Comply with applicable laws, regulations, and legal processes.</li>
        <li>
          Use your information for any commercial or marketing purposes as
          allowed under the Terms and Conditions, including but not limited to
          sending offers, promotions, and legal services information.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        4. Sharing Your Information
      </h2>
      <p className="mt-2 mb-2 font-body">
        We may share your information in the following circumstances:
      </p>
      <h2 className="text-lg font-semibold mt-6">With Service Providers:</h2>
      <p className="font-body">
        We may share your information with third-party service providers who
        perform services for us or on our behalf, such as hosting services,
        customer service, and marketing assistance.
      </p>
      <h2 className="text-lg font-semibold mt-6">For Legal Compliance:</h2>
      <p className="font-body">
        We may disclose your information to comply with applicable law, legal
        process, or governmental request, including responding to subpoenas or
        court orders.
      </p>
      <h2 className="text-lg font-semibold mt-6">Business Transfers:</h2>
      <p className="font-body">
        In the event of a merger, acquisition, or sale of all or a portion of
        our assets, your information may be transferred as part of that
        transaction.
      </p>
      <h2 className="text-lg font-semibold mt-6">With Your Consent:</h2>
      <p className="font-body">
        We may disclose your information for any other purpose with your
        consent.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        5. Security of Your Information
      </h2>
      <p className="font-body">
        We use administrative, technical, and physical security measures to help
        protect your personal information. However, please be aware that no
        security measures are perfect or impenetrable, and no method of data
        transmission can be guaranteed against interception or misuse. We
        disclaim liability for any unauthorized access, disclosure, alteration,
        or destruction of your personal information caused by third parties
        beyond our reasonable control.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        6. Retention of Your Information
      </h2>
      <p className="font-body">
        We retain your personal information for as long as it is necessary to
        fulfill the purposes outlined in this Privacy Policy and the Terms and
        Conditions, including the use of your information for any commercial,
        marketing, or promotional purposes. We may retain your information
        beyond these periods as required by law or for legitimate business
        purposes, such as maintaining accurate business and financial records.
      </p>

      <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
      <p className="mt-2 mb-2 font-body">
        Depending on your location, you may have certain rights regarding your
        personal information, including:
      </p>
      <h2 className="text-lg font-semibold mt-6">Access:</h2>
      <p className="font-body">
        You have the right to request copies of your personal information.
      </p>
      <h2 className="text-lg font-semibold mt-6">Correction:</h2>
      <p className="font-body">
        You have the right to request corrections to any information you believe
        is inaccurate.
      </p>
      <h2 className="text-lg font-semibold mt-6">Deletion:</h2>
      <p className="font-body">
        You have the right to request the deletion of your personal information,
        subject to certain exceptions and the continued need for such
        information for business purposes as described in this Privacy Policy.
      </p>
      <h2 className="text-lg font-semibold mt-6">Opt-Out:</h2>
      <p className="font-body">
        You have the right to opt out of receiving marketing communications from
        us.
      </p>
      <h2 className="text-lg font-semibold mt-6">Data Portability:</h2>
      <p className="font-body">
        You have the right to request that we transfer your data to another
        organization, or directly to you, under certain conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        8. California Privacy Rights (CCPA)
      </h2>
      <p className="mt-2 mb-2 font-body">
        If you are a California resident, you are entitled to additional rights
        under the California Consumer Privacy Act (CCPA), including:
      </p>
      <h2 className="text-lg font-semibold mt-6">Right to Know:</h2>
      <p className="font-body">
        You can request that we disclose the categories and specific pieces of
        personal information we collect.
      </p>
      <h2 className="text-lg font-semibold mt-6">Right to Delete:</h2>
      <p className="font-body">
        You may request that we delete your personal information, subject to
        certain exceptions, including our rights to retain such information for
        commercial or business purposes.
      </p>
      <h2 className="text-lg font-semibold mt-6">Right to Opt-Out of Sales:</h2>
      <p className="font-body">
        We do not sell your personal information and have not done so in the
        preceding 12 months.
      </p>
      <h2 className="text-lg font-semibold mt-6">
        Right to Non-Discrimination:
      </h2>
      <p className="font-body">
        We will not discriminate against you for exercising any of your CCPA
        rights.
      </p>
      <p className="mt-2 mb-2 font-body">
        To exercise your rights under CCPA, please contact us using the
        information provided in the “Contact Us” section below.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        9. International Data Transfers (GDPR Compliance)
      </h2>
      <p className="font-body">
        If you are accessing our Website from outside the United States, your
        information may be transferred to, stored, and processed in the United
        States or other countries where our servers are located. By using our
        Website, you consent to such transfers.
      </p>

      <h2 className="text-xl font-semibold mt-6">10. Third-Party Websites</h2>
      <p className="font-body">
        The Website may contain links to third-party websites not operated by
        us. We are not responsible for the privacy practices or content of those
        websites. We encourage you to review the privacy policies of any
        third-party websites you visit.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        11. Children&apos;s Privacy
      </h2>
      <p className="font-body">
        Our Website is not intended for children under the age of 18. We do not
        knowingly collect personal information from children under 18. If you
        become aware that a child has provided us with personal information,
        please contact us, and we will take steps to remove such information.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        12. Updates to This Privacy Policy
      </h2>
      <p className="font-body">
        We reserve the right to update or modify this Privacy Policy at any
        time. Changes will be indicated by an updated &quot;Last Updated&quot;
        date, and the updated version will be effective as soon as it is
        accessible. Your continued use of the Website constitutes your
        acceptance of any changes to the Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6">13. Contact Us</h2>
      <p className="font-body">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <a
          href="mailto:contact@empowering.legal"
          className="text-blue-500 underline"
        >
          contact@empowering.legal
        </a>
        .
      </p>
    </div> */}
    </>
  );
};

export default PrivacyPolicyComponent;
