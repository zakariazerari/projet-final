import image4 from "../assets/image4.jpg";

import { Phone,  } from "lucide-react";
import { motion } from "framer-motion";
import { Accessibility, HeartPulse, Ambulance } from "lucide-react";

function Home() {
  const contacts = [
    { label: "Alameda County", number: "510-957-8383" },
    { label: "San Francisco County", number: "415-994-1442" },
    { label: "Contra Costa County", number: "925-465-0366" },
    { label: "Santa Clara County", number: "408-579-9775" },
    { label: "San Mateo County", number: "650-474-5777" },
  ];

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
            className="bg-violet-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-violet-700 transition transform hover:scale-105 shadow-lg"
          >
            Book Now
          </a>
        </div>
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
        
   
      {/* Contact Info */}
   <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-violet-800 drop-shadow"
        >
          Contact Us
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-8 rounded-2xl shadow-xl"
          >
            <h4 className="text-xl font-semibold mb-6 text-violet-800">Send us a message</h4>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition shadow-md"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info with animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-800"
          >
            <h4 className="text-xl font-semibold mb-6 text-violet-800">Contact Information</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <Phone className="text-violet-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{contact.label}</p>
                    <p className="text-sm text-gray-600">{contact.number}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
