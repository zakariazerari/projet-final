import { motion } from "framer-motion";
import image3 from "../assets/image3.jpg";

function About() {
  return (
    <section className="bg-gradient-to-r from-white to-indigo-50 py-24" id="about">
      <div className="container mx-auto px-6 lg:px-24">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-violet-800 mb-16 drop-shadow-lg"
        >
          About Eden Medical Transport
        </motion.h2>

        {/* المحتوى */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 text-lg leading-relaxed space-y-6"
          >
            <p>
              <strong className="text-violet-700 font-semibold">Eden Medical Transport</strong> is more than just a ride — it’s a promise of care. Established with a deep commitment to the well-being of our patients, we specialize in non-emergency medical transportation services designed to meet the needs of those who require safe, respectful, and dependable travel to and from their medical appointments.
            </p>

            <p>
              Our team consists of highly trained professionals — from dispatchers to drivers — who prioritize punctuality, empathy, and excellence. We understand that medical transport isn't just about getting from one place to another; it’s about peace of mind for you and your loved ones.
            </p>

            <p>
              We proudly maintain a modern fleet of clean, wheelchair-accessible, smoke-free vehicles that are regularly sanitized and maintained. Whether you're heading to a routine check-up, dialysis session, physical therapy, or hospital discharge, we ensure that your journey is smooth, safe, and comfortable.
            </p>

            <p>
              At Eden, we don’t just transport — we care. We bridge the gap between medical needs and human dignity. Our services are available across multiple counties and are designed to serve the elderly, disabled, and anyone needing dependable medical transportation.
            </p>

            <p className="text-violet-700 font-semibold">
              Your health matters — and so does how you get there.
            </p>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-violet-100"
          >
            <img
              src={image3}
              alt="Eden Medical Transport Vehicle"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;