// Імпорт бібліотеки React із явним зазначенням простору імен для використання хуків
import * as React from "react"

// Визначення константи для точки перелому мобільного дизайну
const MOBILE_BREAKPOINT = 768

// Визначення кастомного хука useIsMobile для перевірки, чи є пристрій мобільним
export function useIsMobile() {
  // Створення стану isMobile для зберігання статусу мобільного пристрою
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // Виконання побічного ефекту для відстеження розміру вікна браузера
  React.useEffect(() => {
    // Створення медіа-запиту для перевірки ширини екрана
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Функція обробки зміни розміру вікна
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    // Додавання слухача подій для медіа-запиту
    mql.addEventListener("change", onChange)
    // Початкова перевірка розміру вікна
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    // Очищення слухача подій при розмонтуванні компонента
    return () => mql.removeEventListener("change", onChange)
  }, []) // Порожній масив залежностей для виконання ефекту лише один раз

  // Повернення булевого значення, що вказує на мобільний пристрій
  return !!isMobile
}