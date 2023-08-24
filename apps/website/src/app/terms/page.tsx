import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { container } from '../../../styled-system/patterns'

const TermsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms and Conditions - Palladians</title>
      </Head>
      <main
        className={container({
          paddingY: '8rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        })}
      >
        <p data-sourcepos="1:1-1:84">
          Sure, here is a sample Terms and Conditions for your app platform
          called Palladians:
        </p>
        <p data-sourcepos="3:1-3:24">
          <strong>Terms and Conditions</strong>
        </p>
        <p data-sourcepos="5:1-5:221">
          Welcome to Palladians, a platform for crypto-related apps. These Terms
          and Conditions (the "Terms") govern your use of the Palladians
          platform (the "Platform"). By using the Platform, you agree to be
          bound by these Terms.
        </p>
        <p data-sourcepos="7:1-7:18">
          <strong>1. Definitions</strong>
        </p>
        <ul data-sourcepos="9:1-13:0">
          <li data-sourcepos="9:1-9:57">
            "Account" means a user account created on the Platform.
          </li>
          <li data-sourcepos="10:1-10:190">
            "Content" means any information, data, text, software, music, sound,
            photographs, graphics, videos, messages, or other materials that are
            posted, transmitted, or displayed on the Platform.
          </li>
          <li data-sourcepos="11:1-11:160">
            "Intellectual Property Rights" means all intellectual property
            rights, including copyrights, trademarks, patents, trade secrets,
            and other proprietary rights.
          </li>
          <li data-sourcepos="12:1-13:0">
            "User" means any individual or entity that uses the Platform.
          </li>
        </ul>
        <p data-sourcepos="14:1-14:18">
          <strong>2. Eligibility</strong>
        </p>
        <p data-sourcepos="16:1-16:108">
          To use the Platform, you must be at least 18 years old and have the
          legal capacity to enter into a contract.
        </p>
        <p data-sourcepos="18:1-18:23">
          <strong>3. Account Creation</strong>
        </p>
        <p data-sourcepos="20:1-20:258">
          To create an Account, you must provide certain information, such as
          your name, email address,{' '}
          <span className="citation-0 citation-end-0">
            and password. You are responsible for maintaining the
            confidentiality of your Account information and for all activities
            that occur under your
          </span>{' '}
          Account.
        </p>
        <p data-sourcepos="22:1-22:14">
          <strong>4. Content</strong>
        </p>
        <p data-sourcepos="24:1-24:276">
          You are solely responsible for the Content that you post, transmit, or
          display on the Platform. You grant Palladians a non-exclusive,
          worldwide, royalty-free license to use, reproduce, distribute, modify,
          adapt, publish, translate, and create derivative works of your
          Content.
        </p>
        <p data-sourcepos="26:1-26:72">
          You agree that you will not post, transmit, or display any Content
          that:
        </p>
        <ul data-sourcepos="28:1-32:0">
          <li data-sourcepos="28:1-28:104">
            Is illegal, harmful, threatening, abusive, harassing, defamatory,
            obscene, or otherwise objectionable;
          </li>
          <li data-sourcepos="29:1-29:80">
            Infringes the intellectual property rights or other rights of any
            third party;
          </li>
          <li data-sourcepos="30:1-30:28">Is false or misleading; or</li>
          <li data-sourcepos="31:1-32:0">Is intended to deceive or defraud.</li>
        </ul>
        <p data-sourcepos="33:1-33:93">
          Palladians has the right to remove any Content from the Platform at
          any time, for any reason.
        </p>
        <p data-sourcepos="35:1-35:35">
          <strong>5. Intellectual Property Rights</strong>
        </p>
        <p data-sourcepos="37:1-37:176">
          Palladians owns all right, title, and interest in the Platform and the
          Content, except for the Content that you post. You retain all right,
          title, and interest in your Content.
        </p>
        <p data-sourcepos="39:1-39:21">
          <strong>6. Privacy Policy</strong>
        </p>
        <p data-sourcepos="41:1-41:147">
          Your privacy is important to us. Please see our Privacy Policy for
          more information about how we collect, use, and share your personal
          information.
        </p>
        <p data-sourcepos="43:1-43:27">
          <strong>7. Changes to the Terms</strong>
        </p>
        <p data-sourcepos="45:1-45:236">
          We may update these Terms from time to time. The most current version
          of the Terms will always be posted on the Platform. If you continue to
          use the Platform after the Terms have been updated, you agree to be
          bound by the updated Terms.
        </p>
        <p data-sourcepos="47:1-47:18">
          <strong>8. Termination</strong>
        </p>
        <p data-sourcepos="49:1-49:211">
          We may terminate your Account and your access to the Platform for any
          reason, at any time. If we terminate your Account, you will no longer
          be able to use the Platform or access any Content that you have
          posted.
        </p>
        <p data-sourcepos="51:1-51:26">
          <strong>
            9. <span className="citation-1">Governing Law</span>
          </strong>
        </p>
        <span className="citation-1"></span>
        <p data-sourcepos="53:1-53:172">
          <span className="citation-1">These Terms will </span>
          <span className="citation-1 citation-2 citation-end-1">
            be governed by and construed in accordance with the laws of the
            State of California, without
          </span>
          <span className="citation-2 citation-end-2">
            {' '}
            regard to its conflict of laws
          </span>{' '}
          provisions.
        </p>
        <p data-sourcepos="55:1-55:24">
          <strong>10. Entire Agreement</strong>
        </p>
        <p data-sourcepos="57:1-57:229">
          These Terms constitute the entire agreement between you and Palladians
          regarding the use of the Platform. These Terms supersede all prior or
          contemporaneous communications, representations, or agreements,
          whether oral or written.
        </p>
        <p data-sourcepos="59:1-59:14">
          <strong>11. Waiver</strong>
        </p>
        <p data-sourcepos="61:1-61:105">
          No waiver of any provision of these Terms will be effective unless in
          writing and signed by both parties.
        </p>
        <p data-sourcepos="63:1-63:20">
          <strong>12. Severability</strong>
        </p>
        <p data-sourcepos="65:1-65:185">
          If any provision of these Terms is held to be invalid or
          unenforceable, such provision will be struck from these Terms and the
          remaining provisions will remain in full force and effect.
        </p>
        <p data-sourcepos="67:1-67:15">
          <strong>13. Notices</strong>
        </p>
        <p data-sourcepos="69:1-69:305">
          All notices and other communications under these Terms will be in
          writing and will be deemed to have been duly given when delivered in
          person, upon the first business day following deposit in the United
          States mail, postage prepaid, certified or registered, return receipt
          requested, addressed as follows:
        </p>
        <p data-sourcepos="71:1-71:17">If to Palladians:</p>
        <p data-sourcepos="73:1-75:17">
          Palladians 123 Main Street Anytown, CA 91234
        </p>
        <p data-sourcepos="77:1-77:10">If to you:</p>
        <p data-sourcepos="79:1-79:46">
          The email address associated with your Account
        </p>
        <p data-sourcepos="81:1-81:84">
          or to such other address as either party may designate in writing from
          time to time.
        </p>
        <p data-sourcepos="83:1-83:16">
          <strong>14. Headings</strong>
        </p>
        <p data-sourcepos="85:1-85:94">
          The headings in these Terms are for convenience only and will not
          affect their interpretation.
        </p>
        <p data-sourcepos="87:1-87:26">
          <strong>15. Governing Language</strong>
        </p>
        <p data-sourcepos="89:1-89:90">
          These Terms are written in English and will be interpreted in
          accordance with English law.
        </p>
      </main>
    </Layout>
  )
}

export default TermsPage
