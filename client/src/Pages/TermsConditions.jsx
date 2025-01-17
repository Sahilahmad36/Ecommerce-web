import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Terms & Conditions
          </h1>
        </motion.div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <section className="mb-8">
              <p className="text-gray-600">
                These Terms & Conditions apply to between you, the User of this Website (including any sub-domains), and Business Name, the owner and operator of this website. By using this site you accept and agree to be legally bound by our terms and conditions. We may change the terms and condition at any time without notice. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately.
              </p>
              <p className="text-gray-600 mt-4">
                This website is operated by and behalf of:
              </p>
              <p className="text-gray-600">
                <strong>BUSINESS NAME</strong><br />
                ABN 99 999 999 999<br />
                23 Sample Street<br />
                Melbourne 3000<br />
                Australia<br />
                +613 55512345
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Intellectual Property and Acceptable Use</h2>
              <p className="text-gray-600">
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </p>
              <p className="text-gray-600 mt-4">
                We may amend these terms from time to time. Every time you wish to use our website, please check these terms to ensure you understand the terms that apply at that time.
              </p>
              <p className="text-gray-600 mt-4">
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
              <p className="text-gray-600 mt-4">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">User-generated Content</h2>
              <p className="text-gray-600">
                This website may include information and materials uploaded by other users of the website, including to blogs, bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. The views expressed by other users on our website do not represent our views or values.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Uploading Content to Our Website</h2>
              <p className="text-gray-600">
                Whenever you make use of a feature that allows you to upload content to our website, or to make contact with other users of our website, you must comply with the content standards set out in these terms.
              </p>
              <p className="text-gray-600 mt-4">
                You warrant that any such contribution does comply with those standards, and you will be liable to us and indemnify us for any breach of that warranty. This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.
              </p>
              <p className="text-gray-600 mt-4">
                We have the right to remove any posting you make on our website if, in our opinion, your post does not comply with the content standards set out in these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Privacy Policy</h2>
              <p className="text-gray-600">
                Information collected by Business Name from their customers is kept strictly confidential. Any information passed on to third parties such as Australia Post or courier companies, is solely for the completion of your order. Business Name will not sell any collected personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Copyright Notice</h2>
              <p className="text-gray-600">
                This website and its content, including the site design and graphics, is copyright of Business Name. All rights reserved.
              </p>
              <p className="text-gray-600 mt-4">
                Any other trademarks, company names, product names and/or logos set forth in this web site are the property of their respective owners. Trade marks, brand names, product names and company names of or related to the products appearing on this web site are the property of their respective owners. Business Name does not claim to own any of these trade marks nor claim that Business Name is related to, endorsed by, or in any other way connected or associated with these companies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Disclaimer</h2>
              <p className="text-gray-600">
                The information contained in this website is for general information purposes only. The information is provided by Business Name and whilst we endeavour to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pricing</h2>
              <p className="text-gray-600">
                All prices are displayed in AUD and include GST. Prices may be subject to change without notice. All prices are correct at time of purchase and are confirmed with an order confirmation email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Availability</h2>
              <p className="text-gray-600">
                All orders are subject to product availability. If a product is not available at the time of purchase you will be notified as soon as possible and offered an alternate product (if available) or a store credit or refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conditions of Sale</h2>
              <p className="text-gray-600">
                All orders must be paid for before they are sent. Business Name takes no responsibility for goods damaged during delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payment</h2>
              <p className="text-gray-600">
                Business Name welcomes payment by credit card, including VISA, Mastercard and American Express. Payment must be made at time of purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Acceptance of Order</h2>
              <p className="text-gray-600">
                Business Name will send email confirmations of your order once placed on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Supply</h2>
              <p className="text-gray-600">
                Business Name reserves the right to refuse to supply to any individual or company.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
