// Імпорт хука useLocation із react-router-dom для отримання поточного шляху
import { useLocation } from "react-router-dom";
// Імпорт хука useEffect із React для виконання побічних ефектів
import { useEffect } from "react";
// Імпорт іконок Leaf і Home із бібліотеки lucide-react для візуального оформлення
import { Leaf, Home } from "lucide-react";
// Імпорт компонента Button із бібліотеки shadcn-ui для створення кнопки
import { Button } from "@/components/ui/button";
// Імпорт компонента Link із react-router-dom для навігації на головну сторінку
import { Link } from "react-router-dom";

// Визначення компонента NotFound для відображення сторінки помилки 404
const NotFound = () => {
  // Отримання поточного шляху за допомогою хука useLocation
  const location = useLocation();

  // Виконання побічного ефекту для логування помилки 404
  useEffect(() => {
    // Логування в консоль помилки з вказівкою неіснуючого маршруту
    console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
    );
  }, [location.pathname]); // Залежність від location.pathname для повторного логування при зміні шляху

  // Рендеринг сторінки помилки 404
  return (
  <div className="min-h-screen flex items-center justify-center bg-eco-light pt-20">
    {/* Контейнер для тексту та кнопки в центрі */}
    <div className="text-center max-w-md px-4">
      {/* Іконка для візуального оформлення */}
      <div className="mb-6">
        <Leaf className="h-16 w-16 text-eco mx-auto" />
      </div>
      {/* Заголовок із кодом помилки */}
      <h1 className="text-6xl font-bold text-eco-dark mb-4">404</h1>
      {/* Опис помилки */}
      <p className="text-xl mb-8">
        Упс! Сторінку не знайдено. Можливо, вона була переміщена або видалена.
      </p>
      {/* Кнопка для повернення на головну сторінку */}
      <Button asChild size="lg" className="bg-eco hover:bg-eco-dark">
        <Link to="/">
          <Home className="mr-2 h-4 w-4" /> Повернутися на головну
        </Link>
      </Button>
    </div>
  </div>
);
};

// Експорт компонента NotFound для використання в App.tsx як обробник неіснуючих маршрутів
export default NotFound;