// Імпорт функції clsx та типу ClassValue із бібліотеки clsx для об’єднання класів
import { clsx, type ClassValue } from "clsx"
// Імпорт функції twMerge із бібліотеки tailwind-merge для злиття класів Tailwind CSS
import { twMerge } from "tailwind-merge"

// Визначення утиліти cn для об’єднання класів із підтримкою Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  // Об’єднання класів за допомогою clsx і злиття їх із tailwind-merge
  return twMerge(clsx(inputs))
}