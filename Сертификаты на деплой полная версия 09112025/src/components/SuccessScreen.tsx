import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface SuccessScreenProps {
  onReset?: () => void;
  onContinue?: () => void;
  showButtons?: boolean;
  resetButtonText?: string;
  continueButtonText?: string;
}

export function SuccessScreen({ 
  onReset, 
  onContinue,
  showButtons = true,
  resetButtonText = "Заполнить снова",
  continueButtonText = "Перейти к заявке"
}: SuccessScreenProps) {
  // Генерация уникального номера заявки
  const requestNumber = React.useMemo(() => 
    Math.random().toString(36).substr(2, 9).toUpperCase(),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      {/* Успешная иконка */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-10 h-10 text-emerald-600" />
      </motion.div>

      {/* Заголовок */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl text-gray-900 mb-4"
      >
        Отлично! Ваша заявка принята
      </motion.h3>

      {/* Описание */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <p className="text-lg text-gray-600 mb-4">
          Ваша заявка успешно отправлена! Наш менеджер уже готовит для вас персональное коммерческое предложение.
        </p>
        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-emerald-900 mb-1">Что дальше?</p>
              <p className="text-emerald-700 text-sm">
                В течение <strong>30 минут</strong> с вами свяжется наш специалист для уточнения деталей и расчета персональной скидки
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Кнопки */}
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          {onReset && (
            <Button
              onClick={onReset}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {resetButtonText}
            </Button>
          )}
          {onContinue && (
            <Button
              onClick={onContinue}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {continueButtonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </motion.div>
      )}

      {/* Дополнительная информация */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 pt-6 border-t border-gray-200"
      >
        <p className="text-sm text-gray-500">
          Номер заявки: <span className="font-mono text-gray-700">#{requestNumber}</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
