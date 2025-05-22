import { motion } from "framer-motion";
import { Phone,  } from "lucide-react";

function Contact() {
   const contacts = [
    { label: "Alameda County", number: "510-957-8383" },
    { label: "San Francisco County", number: "415-994-1442" },
    { label: "Contra Costa County", number: "925-465-0366" },
    { label: "Santa Clara County", number: "408-579-9775" },
    { label: "San Mateo County", number: "650-474-5777" },
  ];
  return (
    <div>
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
    </div>
  );
}

export default Contact;
