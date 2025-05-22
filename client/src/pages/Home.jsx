import image4 from "../assets/image4.jpg";

import { motion } from "framer-motion";
import { Accessibility, HeartPulse, Ambulance } from "lucide-react";

function Home() {
 

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat px-6 py-20 flex items-center justify-center min-h-[600px]"
        style={{
          backgroundImage: `url(${image4})`,
        }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-40"></div> {/* Overlay */}

        <div className="relative z-10 max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-md text-violet-100">
            Comfortable and Safe Medical Transportation for All Your Healthcare Needs
          </h2>
          <p className="text-lg md:text-xl mb-8 text-indigo-100">
            Eden Medical Transport offers non-emergency medical transport services with the highest level of comfort and safety in California.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Book Now
          </a>
        </div>
      </section>
      <section
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4 py-10"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-4xl p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-violet-800 mb-10">
          Book a Medical Ride
        </h2>

        <form className="space-y-6">
          {/* Type of Service & Mobility */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold block mb-2">
                Type of Service
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Non-Emergency</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">Mobility</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Wheelchair</option>
                <option>Stretcher / Gurney</option>
                <option>Sedan</option>
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold block mb-2">
                Transport Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">
                Pick-Up Time
              </label>
              <input
                type="time"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              />
            </div>
          </div>

          {/* Addresses */}
          <div>
            <label className="text-sm font-semibold block mb-2">
              Pick-Up Address
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              placeholder="123 Main St, City, ZIP"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-2">
              Destination Address
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              placeholder="456 Elm St, City, ZIP"
            />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold block mb-2">
                Patient's Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold block mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">
                Payment Method
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a payment method
                </option>
                <option value="insurance">Insurance</option>
                <option value="cash">Cash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="medicare">Medicare</option>
                <option value="medicaid">Medicaid</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Special Note */}
          <div>
            <label className="text-sm font-semibold block mb-2">
              Special Requirements
            </label>
            <textarea
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              placeholder="Any special instructions..."
            ></textarea>
          </div>

          {/* Submit */}
          <button className="w-full bg-violet-600 text-white py-3 rounded-xl hover:bg-violet-700 transition font-semibold text-lg">
            Submit Request
          </button>
        </form>
      </motion.div>
    </section>




       <section className="bg-gradient-to-br from-indigo-50 to-violet-50 py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-x-hidden">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-violet-800 mb-12 drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          WELCOME TO <br />
          EDEN MEDICAL TRANSPORTATION
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Accessibility className="text-violet-700 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold text-violet-800 mb-3">Accessible Transport</h4>
            <p className="text-gray-600 leading-relaxed">
              Personalized wheelchair & non-emergency transport services tailored to each client’s mobility needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <HeartPulse className="text-violet-700 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold text-violet-800 mb-3">Professional & Safe</h4>
            <p className="text-gray-600 leading-relaxed">
              Certified EMRs ride along in every gurney van ensuring full safety and medical support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Ambulance className="text-violet-700 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold text-violet-800 mb-3">Reliable Service</h4>
            <p className="text-gray-600 leading-relaxed">
              On-time transport to doctor appointments, and rehab centers — always on schedule.
            </p>
          </div>
        </motion.div>
      </div>
    </section>  
      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-violet-100 via-white to-indigo-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-violet-800 mb-6 drop-shadow">Our Mission</h3>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
            Safety comes first! We provide punctual and efficient services. We offer the best customer service through our well trained, friendly and professional staff from our dispatch team to our drivers. We provide clean, well maintained vehicles in a smoke-free and non-hazardous environment.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
