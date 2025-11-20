import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
  Building2, Users, Bell, Shield, Palette, Link2, Globe, Save
} from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { Separator } from './ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export const SettingsTab = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    issued: true,
    activated: true,
    expiring: true,
    inactive: false,
    weekly: true,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Настройки</h2>
        <p className="text-sm text-gray-500 mt-1">
          Управление профилем компании и параметрами HR Panel
        </p>
      </div>

      {/* Company Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-gray-900">Профиль компании</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company-name">Название компании</Label>
                <Input id="company-name" defaultValue="ТехноСтарт ООО" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="inn">ИНН</Label>
                <Input id="inn" defaultValue="7701234567" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Адрес</Label>
              <Input id="address" defaultValue="г. Москва, ул. Примерная, д. 1" className="mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-person">Контактное лицо</Label>
                <Input id="contact-person" defaultValue="Анна Сергеевна" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="hr@technostart.ru" className="mt-2" />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Save className="w-4 h-4 mr-2" />
                Сохранить изменения
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* User Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">Управление пользователями</h3>
            </div>
            <Button variant="outline" size="sm">
              Добавить пользователя
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Анна Сергеевна', role: 'Admin', status: 'Активен', email: 'anna@technostart.ru' },
              { name: 'Петров Игорь', role: 'Manager', status: 'Активен', email: 'igor@technostart.ru' },
              { name: 'Иванова Мария', role: 'Viewer', status: 'Приглашен', email: 'maria@technostart.ru' },
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-emerald-700">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-lg border">
                    {user.role}
                  </span>
                  <span className={`text-sm ${user.status === 'Активен' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {user.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Email Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-gray-900">Email уведомления</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Сертификат выдан сотруднику</p>
                <p className="text-sm text-gray-500">Отправлять email при выдаче сертификата</p>
              </div>
              <Switch
                checked={emailNotifications.issued}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, issued: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Сертификат активирован</p>
                <p className="text-sm text-gray-500">Уведомление HR при активации</p>
              </div>
              <Switch
                checked={emailNotifications.activated}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, activated: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Истекает через 30 дней</p>
                <p className="text-sm text-gray-500">Напоминание о скором истечении</p>
              </div>
              <Switch
                checked={emailNotifications.expiring}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, expiring: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Не активирован 60 дней</p>
                <p className="text-sm text-gray-500">Предупреждение о неиспользованных сертификатах</p>
              </div>
              <Switch
                checked={emailNotifications.inactive}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, inactive: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Еженедельный отчет</p>
                <p className="text-sm text-gray-500">Сводка активности за неделю</p>
              </div>
              <Switch
                checked={emailNotifications.weekly}
                onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, weekly: checked})}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Departments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-gray-900">Отделы компании</h3>
            </div>
            <Button variant="outline" size="sm">
              Добавить отдел
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: 'Разработка', count: 32 },
              { name: 'Маркетинг', count: 18 },
              { name: 'HR', count: 8 },
              { name: 'Продажи', count: 45 },
              { name: 'Финансы', count: 12 },
              { name: 'IT', count: 6 },
            ].map((dept, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold text-gray-900">{dept.name}</p>
                <p className="text-sm text-gray-500 mt-1">{dept.count} сотрудников</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* General Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-900">Общие настройки</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="language">Язык интерфейса</Label>
                <Select defaultValue="ru">
                  <SelectTrigger id="language" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timezone">Часовой пояс</Label>
                <Select defaultValue="msk">
                  <SelectTrigger id="timezone" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="msk">МСК (UTC+3)</SelectItem>
                    <SelectItem value="spb">СПб (UTC+3)</SelectItem>
                    <SelectItem value="ekb">Екатеринбург (UTC+5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date-format">Формат даты</Label>
                <Select defaultValue="dd.mm.yyyy">
                  <SelectTrigger id="date-format" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd.mm.yyyy">ДД.ММ.ГГГГ</SelectItem>
                    <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currency">Валюта</Label>
                <Select defaultValue="rub">
                  <SelectTrigger id="currency" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rub">₽ RUB</SelectItem>
                    <SelectItem value="usd">$ USD</SelectItem>
                    <SelectItem value="eur">€ EUR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-gray-900">Безопасность</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Двухфакторная аутентификация</p>
                <p className="text-sm text-gray-500">Дополнительная защита учетной записи</p>
              </div>
              <Button variant="outline" size="sm">
                Настроить
              </Button>
            </div>
            <Separator />
            <div>
              <p className="font-medium text-gray-900 mb-2">История входов</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 flex justify-between p-2 bg-gray-50 rounded">
                  <span>01.11.2024 14:32 • Москва, Россия</span>
                  <span className="text-emerald-600">Текущая сессия</span>
                </div>
                <div className="text-sm text-gray-600 flex justify-between p-2 bg-gray-50 rounded">
                  <span>31.10.2024 09:15 • Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
