// Імпорт хуків useState і useEffect із React для управління станом і побічними ефектами
import {useState, useEffect} from 'react';
// Імпорт компонента Link і хука useLocation із React Router для навігації та відстеження поточного маршруту
import {Link, useLocation} from 'react-router-dom';
// Імпорт іконок Menu, X і Leaf із бібліотеки lucide-react для візуального оформлення
import {Menu, X, Leaf} from 'lucide-react';
// Імпорт кастомного хука useIsMobile для визначення мобільного пристрою
import {useIsMobile} from '@/hooks/use-mobile';
// Імпорт компонента Button із бібліотеки shadcn-ui для створення кнопок
import {Button} from '@/components/ui/button';

// Визначення компонента Header для відображення навігаційного меню сайту
const Header = () => {
    // Створення стану isMenuOpen для управління відкриттям/закриттям мобільного меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Використання хука useIsMobile для визначення, чи є пристрій мобільним
    const isMobile = useIsMobile();
    // Отримання поточного маршруту через хук useLocation для виділення активного пункту меню
    const {pathname} = useLocation();
    // Створення стану scrolled для зміни стилів заголовка при прокручуванні сторінки
    const [scrolled, setScrolled] = useState(false);

    // Використання хука useEffect для відстеження прокручування сторінки
    useEffect(() => {
        // Функція handleScroll змінює стан scrolled залежно від позиції прокручування
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Додавання слухача події прокручування до вікна браузера
        window.addEventListener("scroll", handleScroll);
        // Видалення слухача при розмонтуванні компонента для уникнення витоків пам’яті
        return () => window.removeEventListener("scroll", handleScroll);
        // Порожній масив залежностей для виконання ефекту лише при монтуванні/розмонтуванні
    }, []);

    // Функція toggleMenu для перемикання стану мобільного меню
    const toggleMenu = () => {
        setIsMenuOpen(prev => {
            // Якщо меню відкривається, прокручувати сторінку до верхньої позиції
            if (!prev) {
                window.scrollTo({ top: 0 });
            }
            return !prev;
        });
    };

    // Функція closeMenu для закриття мобільного меню після вибору пункту
    const closeMenu = () => setIsMenuOpen(false);

    // Масив navItems із пунктами навігації для відображення в меню
    const navItems = [
        {name: 'Головна', path: '/'},
        {name: 'Новини', path: '/news'},
        {name: 'Еко-ініціативи', path: '/initiatives'},
        {name: 'Контакти', path: '/contact'},
    ];

    // Функція isActive для визначення, чи є поточний маршрут активним
    const isActive = (path: string) => pathname === path;

    // Рендеринг компонента заголовка з адаптивним дизайном
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
            }`}
        >
            {/* ↑ Заголовок із фіксованою позицією, що змінює стиль при прокручуванні */}
            {/* Контейнер для вирівнювання контенту з відступами */}
            <div className="container mx-auto px-4">
                {/* Flex-контейнер для логотипа, навігації та кнопки меню */}
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Логотип із посиланням на головну сторінку */}
                    <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                        {/* Іконка Leaf для підкреслення екологічної тематики */}
                        <Leaf className="h-8 w-8 text-eco"/>
                        {/* Назва проєкту з кастомним стилем */}
                        <span className="text-xl font-bold text-eco-dark">EcoBreath</span>
                    </Link>

                    {/* Навігація для десктопних пристроїв */}
                    {/* Посилання для кожного пункту меню з умовною стилізацією */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium transition-colors hover:text-eco-dark ${
                                    isActive(item.path)
                                        ? 'text-eco border-b-2 border-eco'
                                        : 'text-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Кнопка для мобільного меню */}
                    <div className="md:hidden">
                        {/* Кнопка з іконкою для відкриття/закриття меню */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
                        >
                            {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Мобільне меню, яке відображається лише на мобільних пристроях при відкритті */}
            {/* Посилання для мобільного меню з умовною стилізацією */}
            {isMobile && isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white pt-16">
                    {/* Навігація для мобільного меню з вертикальним розташуванням */}
                    <nav className="flex flex-col items-center justify-center h-full space-y-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-lg font-medium transition-colors ${
                                    isActive(item.path) ? 'text-eco' : 'text-foreground'
                                }`}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

// Експорт компонента Header для використання в App.tsx
export default Header;