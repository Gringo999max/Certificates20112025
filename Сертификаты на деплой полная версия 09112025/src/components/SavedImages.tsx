// Компонент для сохранённых изображений
// Здесь хранятся все загруженные пользователем изображения для дальнейшего использования

import glampingWaterImage from 'figma:asset/a0b8e599e5bbf45588da54d967c860464aeae27a.png'

export const savedImages = {
  // Красивое изображение глэмпинга у воды в осеннем лесу
  glampingWaterScene: glampingWaterImage,
}

// Пример использования:
// import { savedImages } from './components/SavedImages'
// <img src={savedImages.glampingWaterScene} alt="Глэмпинг у воды" />