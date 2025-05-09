import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <section className="text-center py-20 px-4">
      <img
        src="/WTFC-logo.png"
        alt="WTFC Logo"
        className="mx-auto mb-6 h-24"
      />
      <h1 className="text-4xl font-bold mb-4">
        Wyatt Thin Film Company (WTFC)
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Building the next generation of high-throughput, low-cost thin-film coating reactors for energy storage, electronics, and sustainability.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">About WTFC</h2>
      <p className="text-lg mb-2">
        WTFC is developing a proprietary continuous-flow fluidized bed reactor that applies the precision of ALD, MLD, and oMLD at dramatically faster coating rates. Our founder, Dr. Quinton Wyatt, and partner Dr. Matthias Young, have over a decade of experience in gas-phase thin-film technologies with peer-reviewed publications on electrochemical polymers, energy storage coatings, and molecularly designed reactors.
      </p>
      <p className="text-lg">
        Our mission is to scale lab-proven thin film coatings into commercial platforms using affordable, modular reactor systems—bridging the gap between research and scalable manufacturing.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>Email: <a href="mailto:QWyatt@WyattThinFilmCompany.com" className="text-blue-600">QWyatt@WyattThinFilmCompany.com</a></p>
      <p>Phone: (281) 546-7668</p>
      <p>Location: Wyatt Thin Film Company, University of Missouri, Chemistry Building</p>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">WTFC</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </nav>
      </header>
      <main className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
