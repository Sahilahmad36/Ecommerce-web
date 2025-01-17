import React from 'react';
import { motion } from 'framer-motion';

const DeliveryShipping = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Shipping & Returns
          </h1>
        </motion.div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery and Shipping</h2>
              <p className="text-gray-600">
                <strong>Delivery Fees:</strong> Delivery fees and times vary for different products and are calculated based on the size and weight of your order and its destination. The delivery price for each order will be displayed during the checkout process, prior to payment and order confirmation, and included in the total price of your order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Time</h2>
              <p className="text-gray-600">
                Typically, delivery occurs within 10 working days of us receiving your payment authorisation and cleared funds. In some cases, the estimated delivery time frame will be longer, for example, where items are made to order. From time to time, the delivery of specific items will exceed our usual 10 working day delivery window for reasons outside our control. We work hard to process all orders as quickly as possible and will send you an email to let you know when your item has been dispatched by us.
              </p>
              <p className="text-gray-600 mt-4">
                Risk in the products passes to you on delivery. We do not accept liability for any loss, theft or damage to the products after delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Methods & Locations</h2>
              <p className="text-gray-600">
                We work with a number of delivery partners including Australia Post and courier companies. Your order will be delivered to the delivery address provided by you.
              </p>
              <p className="text-gray-600 mt-4">
                We deliver most products Australia-wide. In some cases, we will only be able to deliver products in metropolitan areas. This information will be shown on the product listing.
              </p>
              <p className="text-gray-600 mt-4">
                We are not able to accept orders for international delivery at this time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Failure</h2>
              <p className="text-gray-600">
                It is important that you verify your information is correct, especially your delivery address. If the address provided is incorrect and the package is returned, you may be billed for the additional shipping charges in order for your delivery to reach you. You agree to this by placing an order with us, and we reserve the right to pass on applicable charges to you if you provide incorrect address information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Returns Policy</h2>
              <p className="text-gray-600">
                If for any reason you are not satisfied with your purchase, it can be returned for an exchange or refund within 30 days, no questions asked. The returned item must be in original condition and in its original packaging.
              </p>
              <p className="text-gray-600 mt-4">
                We guarantee to replace, exchange, or refund any goods that are delivered to you damaged or faulty. This guarantee requires you to inform us immediately of the problem. Shipping costs for returned goods are the responsibility of the customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Incorrectly Described Goods</h2>
              <p className="text-gray-600">
                We guarantee to exchange or refund any goods that do not match the description on our website. This guarantee requires you to inform us immediately of the problem. Shipping costs for returned goods are the responsibility of the customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Goods That Cannot Be Returned</h2>
              <p className="text-gray-600">
                Products that have been used cannot be returned.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryShipping;
