
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">EcoBreath</span>
            </div>
            <p className="text-sm mb-4">
              EcoBreath - інформаційний ресурс, присвячений питанням екології, збереженню природи, змінам клімату та сталому розвитку в Україні.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-eco-light transition-colors">
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm hover:text-eco-light transition-colors">
                  Новини
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm hover:text-eco-light transition-colors">
                  Еко-ініціативи
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-eco-light transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-eco-light" />
                <span className="text-sm">info@ecobreath.ua</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-eco-light" />
                <span className="text-sm">+380 44 123 4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-eco-light" />
                <span className="text-sm">Київ, Україна</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social and Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Соціальні мережі</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-eco-light transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-eco-light transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-eco-light transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-eco/20 mt-8 pt-6">
          <div className="text-center text-sm text-eco-light/80">
            &copy; {currentYear} EcoBreath Ukraine. Всі права захищені.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
