// Імпорт компонента Link із React Router для створення навігаційних посилань
import {Link} from 'react-router-dom';
// Імпорт іконок Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin із бібліотеки lucide-react для візуального оформлення
import {Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin} from 'lucide-react';

// Визначення компонента Footer для відображення нижньої частини сайту з контактами, посиланнями та інформацією
const Footer = () => {
    // Отримання поточного року для відображення в копірайті
    const currentYear = new Date().getFullYear();

    // Рендеринг компонента футера з адаптивною сіткою
    return (
        <footer className="bg-eco-dark text-white pt-12 pb-6">
            {/* Контейнер для вирівнювання контенту з відступами */}
            <div className="container mx-auto px-4">
                {/* Сітка для розташування колонок, адаптивна для різних розмірів екрана */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Колонка 1 - Інформація про проєкт */}
                    <div>
                        {/* Логотип і назва проєкту */}
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Іконка Leaf для підкреслення екологічної тематики */}
                            <Leaf className="h-6 w-6"/>
                            {/* Назва проєкту з жирним шрифтом */}
                            <span className="text-xl font-bold">EcoBreath</span>
                        </div>
                        {/* Опис проєкту для інформування користувачів */}
                        <p className="text-sm mb-4">
                            EcoBreath - інформаційний ресурс, присвячений питанням екології, збереженню природи, змінам
                            клімату та сталому розвитку в Україні.
                        </p>
                    </div>

                    {/* Колонка 2 - Швидкі посилання */}
                    <div>
                        {/* Заголовок для секції швидких посилань */}
                        <h3 className="text-lg font-medium mb-4">Швидкі посилання</h3>
                        {/* Список навігаційних посилань */}
                        <ul className="space-y-2">
                            {/* Посилання на головну сторінку */}
                            <li>
                                <Link to="/" className="text-sm hover:text-eco-light transition-colors">
                                    Головна
                                </Link>
                            </li>
                            {/* Посилання на сторінку новин */}
                            <li>
                                <Link to="/news" className="text-sm hover:text-eco-light transition-colors">
                                    Новини
                                </Link>
                            </li>
                            {/* Посилання на сторінку еко-ініціатив */}
                            <li>
                                <Link to="/initiatives" className="text-sm hover:text-eco-light transition-colors">
                                    Еко-ініціативи
                                </Link>
                            </li>
                            {/* Посилання на сторінку контактів */}
                            <li>
                                <Link to="/contact" className="text-sm hover:text-eco-light transition-colors">
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Колонка 3 - Контактна інформація */}
                    <div>
                        {/* Заголовок для секції контактів */}
                        <h3 className="text-lg font-medium mb-4">Контакти</h3>
                        {/* Список контактних даних */}
                        <ul className="space-y-3">
                            {/* Електронна пошта з іконкою */}
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-eco-light"/>
                                <span className="text-sm">info@ecobreath.ua</span>
                            </li>
                            {/* Телефон із іконкою */}
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-eco-light"/>
                                <span className="text-sm">+380 44 123 4567</span>
                            </li>
                            {/* Адреса з іконкою */}
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-eco-light"/>
                                <span className="text-sm">Київ, Україна</span>
                            </li>
                        </ul>
                    </div>

                    {/* Колонка 4 - Соціальні мережі */}
                    <div>
                        {/* Заголовок для секції соціальних мереж */}
                        <h3 className="text-lg font-medium mb-4">Соціальні мережі</h3>
                        {/* Контейнер для іконок соціальних мереж */}
                        <div className="flex space-x-4 mb-6">
                            {/* Посилання на Facebook */}
                            <a href="#" className="hover:text-eco-light transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5"/>
                            </a>
                            {/* Посилання на Twitter */}
                            <a href="#" className="hover:text-eco-light transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5"/>
                            </a>
                            {/* Посилання на Instagram */}
                            <a href="#" className="hover:text-eco-light transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Розділювальна лінія та копірайт */}
                <div className="border-t border-eco/20 mt-8 pt-6">
                    {/* Текст копірайту з поточним роком */}
                    <div className="text-center text-sm text-eco-light/80">
                        © {currentYear} EcoBreath Ukraine. Всі права захищені.
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Експорт компонента Footer для використання в App.tsx
export default Footer;