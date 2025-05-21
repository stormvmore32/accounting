import { useEffect } from 'react';

type MetaTag = {
  [key: string]: string;
} & (
  | { name: string; content: string }
  | { property: string; content: string }
  | { charset: string }
);

interface UseHeadProps {
  title?: string;
  meta?: MetaTag[];
}

export function useHead({ title, meta = [] }: UseHeadProps): void {
  useEffect(() => {
    // Установка заголовка
    if (title) {
      document.title = title;
    }

    // Добавление мета-тегов
    const addedElements: HTMLElement[] = [];
    
    meta.forEach(tag => {
      const element = document.createElement('meta');
      
      Object.entries(tag).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      
      document.head.appendChild(element);
      addedElements.push(element);
    });

    // Очистка при размонтировании
    return () => {
      addedElements.forEach(element => {
        if (element.parentNode === document.head) {
          document.head.removeChild(element);
        }
      });
    };
  }, [title, meta]);
}