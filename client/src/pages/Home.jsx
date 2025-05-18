import image4 from "../assets/image4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMedical, faVanShuttle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Comfortable and Safe Medical Transportation for All Your Healthcare Needs
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Eden Medical Transport offers non-emergency medical transport services with the highest level of comfort and safety in California.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-xl"
          >
            Book Now
          </a>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="transform hover:scale-105 transition duration-500 shadow-2xl rounded-2xl overflow-hidden">
            <img
              src={image4}
              alt="Medical transport"
              className="max-w-full h-auto object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 shadow-inner rounded-t-3xl mt-10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold mb-12 text-gray-800 drop-shadow">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Emergency Transport */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition duration-500">
              <FontAwesomeIcon icon={faTruckMedical} size="2x" className="text-blue-700" />
              <h4 className="mt-4 font-semibold text-xl text-gray-800">Emergency Transport</h4>
              <p className="mt-2 text-gray-600">
                Fast transport service for emergency cases with a specialized team.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition shadow-md"
              >
                Book Now
              </a>
            </div>

            {/* Non-Emergency Transport */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition duration-500">
              <FontAwesomeIcon icon={faVanShuttle} size="2x" className="text-blue-700" />
              <h4 className="mt-4 font-semibold text-xl text-gray-800">Non-Emergency Transport</h4>
              <p className="mt-2 text-gray-600">
                Transport service for regular and non-emergency medical appointments.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition shadow-md"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800 drop-shadow">
          About Eden Medical Transport
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
          We specialize in providing non-emergency medical transport services with the highest standards of quality and comfort. We strive to ensure a safe and comfortable experience for our clients in California.
        </p>
      </section>
    </main>
  );
}

export default Home;
