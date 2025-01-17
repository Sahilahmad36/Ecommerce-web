import React from 'react';
import { motion } from 'framer-motion'; 

const Privacy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Privacy Policy
          </h1>
        </motion.div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. We Respect Your Privacy</h2>
              <p className="text-gray-600">
                Business Name respects your right to privacy and this policy sets out how we collect and treat your personal information. “Personal information” is information we hold which is identifiable as being about you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. What Personal Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Name</li>
                <li>Billing address</li>
                <li>Shipping address</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Information about the goods or services you have ordered</li>
                <li>Information from enquiries you have made</li>
                <li>Communications between us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. How We Collect Your Personal Information</h2>
              <p className="text-gray-600">
                We collect personal information from you in a variety of ways, including: when you interact with us electronically or in person; when you access our website; and when we provide our services to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Use of Your Personal Information</h2>
              <p className="text-gray-600">
                We use your information to provide our service to you. We also use it to improve our service and to notify you of opportunities that we think you might be interested in.
              </p>
              <p className="text-gray-600">
                We do not provide your information to third parties, except that we may provide your information to our business partners, such as Australia Post, who assist us in the provision of our services to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Security of Your Personal Information</h2>
              <p className="text-gray-600">
                We take reasonable steps to protect your personal information. However, we are not liable for any unauthorised access to this information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Access to Your Personal Information</h2>
              <p className="text-gray-600">
                You can access and update your personal information by logging in to your account using the email and password you registered with, on the “My Account” page.
              </p>
              <p className="text-gray-600">
                Alternatively, you can access your personal information by contacting Business Name. Business Name will provide a copy of the information free of charge. However, in certain circumstances, it will be possible to charge a “reasonable fee” to the data subject to cover administrative charges where the request involves the gathering of large amounts of data, when the request is manifestly unfounded or excessive, or when the request is repetitive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Complaints About Privacy</h2>
              <p className="text-gray-600">
                If you have any complaints about our privacy practices, please feel free to contact us with details of your complaints. We take complaints very seriously and will respond shortly after receiving notice of your complaint.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Changes</h2>
              <p className="text-gray-600">
                Please be aware that we may change this Privacy Policy in the future. The revised versions will be uploaded onto our website, so please check back from time to time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Website</h2>
              <p className="text-gray-600">
                When you visit our website we may collect certain information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service. More information regarding the use of the Website can be found in our Terms & Conditions.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Cookies</h3>
              <p className="text-gray-600">
                As is very common for companies, we use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. We use cookies to improve the experience of people using our website and in providing our online store. More information on our use of Cookies can be found in our Cookie Policy.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Third Party Sites</h3>
              <p className="text-gray-600">
                Our site has links to other websites not owned or controlled by us. We are not responsible for these sites or the consequences of you going on to those sites.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
