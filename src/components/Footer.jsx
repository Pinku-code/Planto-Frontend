import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-700 dark:bg-gray-900 text-white dark:text-gray-300  text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-bold mb-2 dark:text-green-400">Plantosphere Pvt. Ltd.</h4>
          <p>
            Empowering communities through sustainable agriculture, food innovation, and carbon consulting.
          </p>
          <p className="mt-2">CIN: [Insert CIN]</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2 dark:text-green-400">Quick Links</h4>
          <ul className="space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/products", label: "Products" },
              { href: "/training", label: "Training" },
              { href: "/journal", label: "Journal" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline text-white dark:text-gray-300 hover:text-green-300 dark:hover:text-green-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-bold mb-2 dark:text-green-400">Connect With Us</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:connect@plantosphere.in"
              className="underline text-white dark:text-green-300 hover:text-green-300 dark:hover:text-green-400 transition"
            >
              connect@plantosphere.in
            </a>
          </p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <div className="flex gap-4 mt-3 text-xl text-white dark:text-green-300">
            <a href="#" aria-label="LinkedIn" className="hover:text-green-300 dark:hover:text-green-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-300 dark:hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-300 dark:hover:text-green-400 transition">
              <FaYoutube />
            </a>
            <a href="#" aria-label="X" className="hover:text-green-300 dark:hover:text-green-400 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800 dark:bg-zinc-800 text-center py-3 text-xs text-white dark:text-green-400">
        &copy; 2025 Plantosphere Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
