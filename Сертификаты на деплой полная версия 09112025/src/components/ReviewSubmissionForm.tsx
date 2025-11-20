/**
 * ReviewSubmissionForm.tsx - Форма отправки отзывов с медиа
 * 
 * ========================================
 * 📹 ДЛЯ РАЗРАБОТЧИКОВ: Библиотеки для обработки видео на клиенте
 * ========================================
 * 
 * Для валидации, превью и обработки загружаемых видео можно использовать:
 * 
 * 1. **browser-image-compression** (для генерации thumbnail из видео)
 *    - Установка: npm install browser-image-compression
 *    - Создание превью первого кадра видео для отображения
 * 
 * 2. **ffmpeg.wasm** (для клиентской обработки видео)
 *    - Установка: npm install @ffmpeg/ffmpeg @ffmpeg/core
 *    - Позволяет конвертировать, сжимать видео прямо в браузере
 *    - Полезно для авто-оптимизации перед загрузкой на сервер
 *    - Пример: конвертация в .mp4, изменение разрешения, сжатие
 * 
 * 3. **video-metadata** (для извлечения метаданных)
 *    - Получение длительности, разрешения, битрейта видео
 *    - Валидация параметров перед загрузкой
 * 
 * 4. **Нативный API: HTMLVideoElement**
 *    - Создание временного <video> элемента для валидации:
 *      const video = document.createElement('video')
 *      video.preload = 'metadata'
 *      video.onloadedmetadata = () => {
 *        console.log('Duration:', video.duration)
 *        console.log('Dimensions:', video.videoWidth, video.videoHeight)
 *      }
 *      video.src = URL.createObjectURL(file)
 * 
 * ========================================
 * 🎨 Улучшения UX:
 * ========================================
 * - Показывайте прогресс-бар при загрузке больших видео
 * - Генерируйте thumbnail автоматически для превью
 * - Добавьте drag-and-drop для удобства загрузки
 * - Валидируйте длительность и размер до отправки на сервер
 * 
 * См. также: REVIEWS_MEDIA_REQUIREMENTS.md
 */

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Checkbox } from './ui/checkbox'
import { Badge } from './ui/badge'
import { Alert, AlertDescription } from './ui/alert'
import { Star, Upload, X, Image, Video, AlertCircle, CheckCircle2, FileImage, FileVideo } from 'lucide-react'
import { toast } from 'sonner@2.0.3'

interface ReviewSubmissionFormProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function ReviewSubmissionForm({ isOpen, onClose, onSuccess }: ReviewSubmissionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    certificateNumber: '',
    text: '',
    rating: 5,
    category: 'gift' as 'gift' | 'recipient' | 'corporate',
    agreeToPublish: false
  })

  const [photos, setPhotos] = useState<File[]>([])
  const [video, setVideo] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showRequirements, setShowRequirements] = useState(false)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles: File[] = []
    const newErrors: string[] = []

    files.forEach(file => {
      // Проверка формата
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        newErrors.push(`${file.name}: неверный формат. Используйте .jpg или .png`)
        return
      }
      // Проверка размера
      if (file.size > 5 * 1024 * 1024) {
        newErrors.push(`${file.name}: размер превышает 5 МБ`)
        return
      }
      validFiles.push(file)
    })

    if (photos.length + validFiles.length > 3) {
      toast.error('Можно загрузить максимум 3 фотографии')
      return
    }

    if (newErrors.length > 0) {
      toast.error(newErrors.join('\n'))
      return
    }

    setPhotos([...photos, ...validFiles])
  }

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Проверка формата
    if (!['video/mp4', 'video/webm'].includes(file.type)) {
      toast.error('Неверный формат видео. Используйте .mp4 или .webm')
      return
    }

    // Проверка размера
    if (file.size > 50 * 1024 * 1024) {
      toast.error('Размер видео превышает 50 МБ')
      return
    }

    setVideo(file)
  }

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index))
  }

  const removeVideo = () => {
    setVideo(null)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }

    if (!formData.text.trim()) {
      newErrors.text = 'Напишите текст отзыва'
    } else if (formData.text.length < 50) {
      newErrors.text = 'Минимальная длина отзыва - 50 символов'
    } else if (formData.text.length > 500) {
      newErrors.text = 'Максимальная длина отзыва - 500 символов'
    }

    if (!formData.agreeToPublish) {
      newErrors.agreeToPublish = 'Необходимо согласие на публикацию'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Пожалуйста, исправьте ошибки в форме')
      return
    }

    // Здесь будет отправка на сервер
    console.log('Form data:', formData)
    console.log('Photos:', photos)
    console.log('Video:', video)
    
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      username: '',
      certificateNumber: '',
      text: '',
      rating: 5,
      category: 'gift',
      agreeToPublish: false
    })
    setPhotos([])
    setVideo(null)
    setErrors({})
    
    // Закрываем форму и показываем успешное сообщение
    onClose()
    if (onSuccess) {
      onSuccess()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Поделитесь своей историей</DialogTitle>
          <DialogDescription>
            Расскажите о своих впечатлениях от сертификата или отдыха в глэмпинге
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Личная информация */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">
                  Ваше имя <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setErrors({ ...errors, name: '' })
                  }}
                  placeholder="Иван Иванов"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setErrors({ ...errors, email: '' })
                  }}
                  placeholder="ivan@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="certificateNumber">
                  Номер сертификата (для верификации)
                </Label>
                <Input
                  id="certificateNumber"
                  value={formData.certificateNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, certificateNumber: e.target.value.toUpperCase() })
                    setErrors({ ...errors, certificateNumber: '' })
                  }}
                  placeholder="GLMP-2025-XXXXX"
                  className={errors.certificateNumber ? 'border-red-500' : ''}
                />
                {errors.certificateNumber && (
                  <p className="text-sm text-red-500 mt-1">{errors.certificateNumber}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Указан в вашем сертификате. Помогает нам верифицировать отзыв.
                </p>
              </div>

              <div>
                <Label htmlFor="username">
                  Инст * или юзернейм в Telegram
                </Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="@your_username"
                />
              </div>
            </div>
          </div>

          {/* Категория */}
          <div>
            <Label className="mb-3 block">
              Вы <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.category}
              onValueChange={(value: 'gift' | 'recipient' | 'corporate') =>
                setFormData({ ...formData, category: value })
              }
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              <Label
                htmlFor="gift"
                className={`flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.category === 'gift'
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem value="gift" id="gift" />
                <div>
                  <div>💝 Даритель</div>
                  <div className="text-xs text-gray-500">Подарили сертификат</div>
                </div>
              </Label>

              <Label
                htmlFor="recipient"
                className={`flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.category === 'recipient'
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem value="recipient" id="recipient" />
                <div>
                  <div>🎁 Получатель</div>
                  <div className="text-xs text-gray-500">Получили и использовали</div>
                </div>
              </Label>

              <Label
                htmlFor="corporate"
                className={`flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  formData.category === 'corporate'
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem value="corporate" id="corporate" />
                <div>
                  <div>💼 Корпоратив</div>
                  <div className="text-xs text-gray-500">От компании</div>
                </div>
              </Label>
            </RadioGroup>
          </div>

          {/* Рейтинг */}
          <div>
            <Label className="mb-3 block">
              Оценка <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= formData.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Текст отзыва */}
          <div>
            <Label htmlFor="text">
              Ваш отзыв <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="text"
              value={formData.text}
              onChange={(e) => {
                setFormData({ ...formData, text: e.target.value })
                setErrors({ ...errors, text: '' })
              }}
              placeholder="Расскажите о своих впечатлениях... (минимум 50 символов)"
              rows={5}
              className={errors.text ? 'border-red-500' : ''}
            />
            <div className="flex justify-between mt-1">
              <div>
                {errors.text && (
                  <p className="text-sm text-red-500">{errors.text}</p>
                )}
              </div>
              <p className={`text-sm ${
                formData.text.length < 50 
                  ? 'text-red-500' 
                  : formData.text.length > 500 
                  ? 'text-red-500' 
                  : 'text-gray-500'
              }`}>
                {formData.text.length}/500
              </p>
            </div>
          </div>

          {/* Технические требования */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <button
              type="button"
              onClick={() => setShowRequirements(!showRequirements)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900">Требования к фото и видео</span>
              </div>
              <Badge variant="outline" className="text-blue-600 border-blue-300">
                {showRequirements ? 'Скрыть' : 'Показать'}
              </Badge>
            </button>

            {showRequirements && (
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileImage className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-900">Фотографии:</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                    <li>Формат: .jpg или .png</li>
                    <li>Максимальный размер: 5 МБ на фото</li>
                    <li>Минимальное разрешение: 1200 × 800 пикселей</li>
                    <li>Количество: до 3 фотографий</li>
                    <li>Желательно: горизонтальная ориентация, хорошее освещение</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileVideo className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-900">Видео:</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                    <li>Формат: .mp4 или .webm</li>
                    <li>Максимальный размер: 50 МБ</li>
                    <li>Длительность: 15–60 секунд</li>
                    <li>Минимальное разрешение: 1280 × 720 пикселей (720p)</li>
                    <li>Желательно: стабильная картинка, хороший звук</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Загрузка фото */}
          <div>
            <Label className="mb-3 block">
              Фотографии (опционально, до 3 шт)
            </Label>
            
            {photos.length < 3 && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                <input
                  type="file"
                  id="photos"
                  accept="image/jpeg,image/jpg,image/png"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <label htmlFor="photos" className="cursor-pointer">
                  <Image className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-600 mb-1">Нажмите для загрузки фото</p>
                  <p className="text-sm text-gray-400">JPG или PNG, до 5 МБ</p>
                </label>
              </div>
            )}

            {photos.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {(photo.size / 1024 / 1024).toFixed(1)} МБ
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Загрузка видео */}
          <div>
            <Label className="mb-3 block">
              Видео (опционально)
            </Label>
            
            {!video ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                <input
                  type="file"
                  id="video"
                  accept="video/mp4,video/webm"
                  onChange={handleVideoUpload}
                  className="hidden"
                />
                <label htmlFor="video" className="cursor-pointer">
                  <Video className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-gray-600 mb-1">Нажмите для загрузки видео</p>
                  <p className="text-sm text-gray-400">MP4 или WEBM, до 50 МБ</p>
                </label>
              </div>
            ) : (
              <div className="relative group">
                <div className="border-2 border-emerald-300 rounded-lg p-4 bg-emerald-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Video className="w-8 h-8 text-emerald-600" />
                      <div>
                        <p className="text-gray-900">{video.name}</p>
                        <p className="text-sm text-gray-500">
                          {(video.size / 1024 / 1024).toFixed(1)} МБ
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeVideo}
                      className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Согласие на публикацию */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agree"
                checked={formData.agreeToPublish}
                onCheckedChange={(checked) => {
                  setFormData({ ...formData, agreeToPublish: checked as boolean })
                  setErrors({ ...errors, agreeToPublish: '' })
                }}
                className={errors.agreeToPublish ? 'border-red-500' : ''}
              />
              <div className="flex-1">
                <Label htmlFor="agree" className="cursor-pointer">
                  Я даю согласие на публикацию моего отзыва, фотографий и видео на сайте глэмпинги.рф и в социальных сетях компании <span className="text-red-500">*</span>
                </Label>
                {errors.agreeToPublish && (
                  <p className="text-sm text-red-500 mt-1">{errors.agreeToPublish}</p>
                )}
              </div>
            </div>
          </div>

          {/* Информационное сообщение */}
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              После отправки мы проверим ваш отзыв и опубликуем его в ближайшее время. Вы получите уведомление на указанный email.
            </AlertDescription>
          </Alert>

          {/* Кнопки */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              size="lg"
            >
              Отправить отзыв
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              size="lg"
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Success Dialog Component
interface SuccessDialogProps {
  isOpen: boolean
  onClose: () => void
}

function SuccessDialog({ isOpen, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Спасибо за ваш отзыв! 🎉
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Ваш отзыв успешно отправлен на модерацию
          </DialogDescription>
        </DialogHeader>

        <div className="text-center space-y-6 py-4">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left space-y-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Что дальше?</strong>
                </p>
                <ul className="space-y-1 ml-1">
                  <li>✅ Мы проверим ваш отзыв в течение 1-2 рабочих дней</li>
                  <li>📧 Вы получите email-уведомление, когда отзыв будет опубликован</li>
                  <li>🎁 Лучшие отзывы получат бонусные сертификаты на скидку!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bonus Info */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl">🏆</div>
              <div className="text-left">
                <p className="text-emerald-900">
                  <strong>Программа "Лучший отзыв месяца"</strong>
                </p>
                <p className="text-sm text-emerald-700 mt-1">
                  Самые вдохновляющие отзывы с фото и видео получают сертификат на бесплатную ночь в глэмпинге!
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button 
              onClick={onClose}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              size="lg"
            >
              Отлично!
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            Если у вас есть вопросы, напишите нам на{' '}
            <a href="mailto:hello@глэмпинги.рф" className="text-emerald-600 hover:underline">
              hello@глэмпинги.рф
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { SuccessDialog }
export default ReviewSubmissionForm
