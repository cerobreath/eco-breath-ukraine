// Імпорт функції createRoot із бібліотеки react-dom/client для ініціалізації React-додатка та рендерингу компонентів у DOM
import { createRoot } from 'react-dom/client'
// Імпорт головного компонента App із файлу App.tsx, який є кореневим компонентом додатка та визначає структуру інтерфейсу
import App from './App.tsx'
// Імпорт глобальних стилів, які застосовуються до всього додатка через Tailwind CSS і кастомні класи
import './index.css'

// Створення кореня React-додатка, який прив’язується до елемента з ідентифікатором root у index.html
// Оператор ! використовується для вказівки TypeScript, що елемент існує
// Виклик render для відображення компонента App у DOM, що запускає рендеринг усього інтерфейсу
createRoot(document.getElementById("root")!).render(<App />);