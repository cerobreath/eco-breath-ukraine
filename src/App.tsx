// Імпорт компонентів BrowserRouter, Routes, Route і хука useLocation із React Router для клієнтської маршрутизації
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
// Імпорт AnimatePresence і motion із Framer Motion для створення анімованих переходів між сторінками
import {AnimatePresence, motion} from "framer-motion";
// Імпорт компонента Header для відображення заголовка сайту з навігацією
import Header from "./components/Header";
// Імпорт компонента Footer для відображення нижньої частини сайту з контактами та посиланнями
import Footer from "./components/Footer";
// Імпорт сторінки Home, яка є головною сторінкою проєкту
import Home from "./pages/Home";
// Імпорт сторінки News для відображення новин із фільтрацією та пошуком
import News from "./pages/News";
// Імпорт сторінки Initiatives для відображення екологічних ініціатив із фільтрацією
import Initiatives from "./pages/Initiatives";
// Імпорт сторінки Contact із формою зворотного зв’язку та калькулятором вуглецевого сліду
import Contact from "./pages/Contact";
// Імпорт сторінки NotFound для обробки помилок маршрутизації (404)
import NotFound from "./pages/NotFound";
// Імпорт хука useEffect із React для виконання побічних ефектів, таких як прокручування сторінки
import {useEffect} from "react";

// Компонент PageWrapper для обгортання сторінок з анімаціями переходів через Framer Motion
// Приймає дочірні елементи для рендерингу сторінок
const PageWrapper = ({children}: { children: React.ReactNode }) => (
    // Використання motion.div для створення анімацій появи, відображення та зникнення сторінки
    <motion.div
        // Початковий стан: сторінка невидима (opacity: 0) і зміщена вниз (y: 20)
        initial={{opacity: 0, y: 20}}
        // Анімований стан: сторінка стає видимою (opacity: 1) і повертається на місце (y: 0)
        animate={{opacity: 1, y: 0}}
        // Стан зникнення: сторінка стає невидимою (opacity: 0) і зміщується вгору (y: -20)
        exit={{opacity: 0, y: -20}}
        // Налаштування тривалості анімації (0.3 секунди) для плавного переходу
        transition={{duration: 0.3}}
    >
        {children}
    </motion.div>
);

// Компонент ScrollToTop для автоматичного прокручування сторінки до початку при зміні маршруту
function ScrollToTop() {
    // Використання хука useLocation для відстеження поточного маршруту
    const location = useLocation();
    // Використання хука useEffect для виконання прокручування при зміні шляху
    useEffect(() => {
        // Прокручування сторінки до верхньої позиції (top: 0, left: 0) із плавною анімацією
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        // Залежність від pathname для реагування на зміну маршруту
    }, [location.pathname]);
    // Повернення null, оскільки компонент не рендерить видимого контенту
    return null;
}

// Компонент AnimatedRoutes для управління маршрутами з анімованими переходами
const AnimatedRoutes = () => {
    // Використання хука useLocation для отримання поточного маршруту
    const location = useLocation();

    // Використання AnimatePresence для анімації переходів між маршрутами
    return (
        // Режим "wait" забезпечує завершення анімації зникнення перед рендерингом нової сторінки
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
                <Route path="/news" element={<PageWrapper><News/></PageWrapper>}/>
                <Route path="/initiatives" element={<PageWrapper><Initiatives/></PageWrapper>}/>
                <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}/>
                <Route path="*" element={<PageWrapper><NotFound/></PageWrapper>}/>
            </Routes>
        </AnimatePresence>
    );
};

// Головний компонент App, який є кореневим для всього додатка
const App = () => (
    <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <main className="min-h-screen">
            <AnimatedRoutes/>
        </main>
        <Footer/>
    </BrowserRouter>
);

// Експорт компонента App як головного компонента додатка для рендерингу в main.tsx
export default App;