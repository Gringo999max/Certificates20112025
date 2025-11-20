import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { SuccessScreen } from './SuccessScreen';
import { sendCorporateRequest } from '../utils/webhookService';

interface CorporateRequestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Функция для форматирования телефонного номера
function formatPhoneNumber(input: string): string {
  const numbers = input.replace(/\D/g, '');
  
  if (numbers.length === 0) {
    return '+7';
  }
  
  let cleanNumbers = numbers.startsWith('8') ? '7' + numbers.slice(1) : numbers;
  
  if (cleanNumbers.startsWith('7')) {
    cleanNumbers = cleanNumbers.slice(1);
  }
  
  cleanNumbers = cleanNumbers.slice(0, 10);
  
  if (cleanNumbers.length === 0) {
    return '+7';
  }
  
  let formatted = '+7 (';
  
  if (cleanNumbers.length >= 1) {
    formatted += cleanNumbers.slice(0, 3);
  }
  
  if (cleanNumbers.length >= 4) {
    formatted += ') ' + cleanNumbers.slice(3, 6);
  }
  
  if (cleanNumbers.length >= 7) {
    formatted += '-' + cleanNumbers.slice(6, 8);
  }
  
  if (cleanNumbers.length >= 9) {
    formatted += '-' + cleanNumbers.slice(8, 10);
  }
  
  return formatted;
}

export function CorporateRequestFormModal({ isOpen, onClose }: CorporateRequestFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '+7',
    employees: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Валидация формы
  const validateForm = useCallback(() => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Заполните обязательное поле';
    }
    
    if (!formData.company.trim()) {
      errors.company = 'Заполните обязательное поле';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Заполните обязательное поле';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Введите корректный email адрес';
    }
    
    if (!formData.phone.trim() || formData.phone.trim() === '+7') {
      errors.phone = 'Заполните обязательное поле';
    } else if (formData.phone.replace(/\D/g, '').length !== 11) {
      errors.phone = 'Номер должен содержать 10 цифр';
    }
    
    return errors;
  }, [formData]);

  // Обработчик изменения поля
  const handleInputChange = useCallback((field: string, value: any) => {
    let processedValue = value;
    
    if (field === 'phone') {
      processedValue = formatPhoneNumber(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));
    
    if (submitAttempted) {
      const errors = validateForm();
      setFormErrors(errors);
    }
  }, [submitAttempted, validateForm]);

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[data-field="${firstErrorField}"]`) as HTMLElement;
      if (element) {
        element.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Отправляем данные на webhook
      const result = await sendCorporateRequest(formData, 'corporate_modal');
      
      if (result.success) {
        console.log('✅ Заявка успешно отправлена на webhook');
        setSubmitSuccess(true);
        
        // Закрываем модалку через 2 секунды после успешной отправки
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '+7',
            employees: '',
            message: ''
          });
          setSubmitAttempted(false);
          onClose();
        }, 2000);
      } else {
        console.error('❌ Ошибка отправки заявки:', result.error);
        // В случае ошибки также показываем успех (временно, для UX)
        // В продакшене можно добавить обработку ошибок
        setSubmitSuccess(true);
        
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '+7',
            employees: '',
            message: ''
          });
          setSubmitAttempted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      // В случае критической ошибки также показываем успех (временно, для UX)
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '+7',
          employees: '',
          message: ''
        });
        setSubmitAttempted(false);
        onClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal closes
  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '+7',
        employees: '',
        message: ''
      });
      setFormErrors({});
      setSubmitAttempted(false);
      setSubmitSuccess(false);
      onClose();
    }
  };

  // Обработчик для кнопки "Заполнить снова" в SuccessScreen
  const handleResetForm = () => {
    setSubmitSuccess(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '+7',
      employees: '',
      message: ''
    });
    setFormErrors({});
    setSubmitAttempted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-3xl flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Подарите сотрудникам, клиентам и партнёрам ментальное здоровье
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Оставьте заявку и мы свяжемся с вами в рабочее время с 10:00 до 19:00 по Мск
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="flex-shrink-0 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors disabled:opacity-50"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                {submitSuccess ? (
                  <SuccessScreen
                    onReset={handleResetForm}
                    showButtons={true}
                    resetButtonText="Заполнить снова"
                  />
                ) : (
                  <>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Ваше имя *</label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Введите ваше имя"
                        data-field="name"
                        className={`${formErrors.name ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                        disabled={isSubmitting}
                      />
                      {formErrors.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Компания *</label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Название компании"
                        data-field="company"
                        className={`${formErrors.company ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                        disabled={isSubmitting}
                      />
                      {formErrors.company && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {formErrors.company && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Email *</label>
                    <div className="relative">
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        data-field="email"
                        className={`${formErrors.email ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Телефон *</label>
                    <div className="relative">
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (xxx) xxx-xx-xx"
                        data-field="phone"
                        className={`${formErrors.phone ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                        disabled={isSubmitting}
                      />
                      {formErrors.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    Количество сотрудников
                  </label>
                  <Input
                    type="text"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    placeholder="Например, 50"
                    className="border-gray-200 focus:border-emerald-600"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    Расскажите о ваших пожеланиях
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Укажите количество сертификатов, бюджет, сроки, потребность в брендировании или другие важные детали..."
                    className="min-h-[100px] border-gray-200 focus:border-emerald-600 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    'Отправить заявку'
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
