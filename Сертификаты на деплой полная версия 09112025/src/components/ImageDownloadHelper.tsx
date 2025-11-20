// Компонент для просмотра и скачивания сохранённых изображений
import { savedImages } from './SavedImages'

export function ImageDownloadHelper() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ваши сохранённые изображения
        </h2>
        <p className="text-gray-600">
          Кликните правой кнопкой мыши на изображение и выберите "Сохранить изображение как..."
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Глэмпинг у воды в осеннем лесу
          </h3>
          <div className="relative">
            <img
              src={savedImages.glampingWaterScene}
              alt="Глэмпинг у воды в осеннем лесу"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center">
            Путь к файлу: figma:asset/a0b8e599e5bbf45588da54d967c860464aeae27a.png
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">
          Как сохранить изображение:
        </h4>
        <ol className="list-decimal list-inside text-blue-800 space-y-1">
          <li>Кликните правой кнопкой мыши на изображение</li>
          <li>Выберите "Сохранить изображение как..." или "Save image as..."</li>
          <li>Выберите папку и нажмите "Сохранить"</li>
        </ol>
      </div>
    </div>
  )
}