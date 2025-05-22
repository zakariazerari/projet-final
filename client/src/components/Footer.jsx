

function Footer() {
  return (
   <footer className="bg-violet-700 text-white py-10 shadow-2xl">
  <div className="container mx-auto px-6 text-center">
    <h4 className="text-2xl font-bold mb-2 drop-shadow-lg">Eden Medical Transport</h4>
    <p className="text-sm text-blue-100 mb-4 drop-shadow">
      Reliable & Comfortable Medical Transportation in California
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      <span className="text-sm text-blue-200">© {new Date().getFullYear()} Eden Medical. All rights reserved.</span>
    </div>
  </div>
</footer>

  );
}

export default Footer;
