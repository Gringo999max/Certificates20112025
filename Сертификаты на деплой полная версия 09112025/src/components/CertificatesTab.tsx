import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
  Search, Filter, Download, Eye, Send, Package, Trash2,
  ChevronDown, Calendar, Users, CheckSquare, Square, X
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

// Тестовые данные
const mockCertificates = [
  {
    id: 1,
    name: 'Иванова Мария Петровна',
    email: 'ivanova@technostart.ru',
    department: 'Разработка',
    status: 'used',
    issueDate: '2024-09-15',
    activationDate: '2024-09-20',
    expiryDate: '2025-09-15',
    location: 'Карелия Eco Resort',
    code: 'CERT-2024-001',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 2,
    name: 'Смирнов Алексей Иванович',
    email: 'smirnov@technostart.ru',
    department: 'Маркетинг',
    status: 'activated',
    issueDate: '2024-09-15',
    activationDate: '2024-09-18',
    expiryDate: '2025-09-15',
    location: null,
    code: 'CERT-2024-002',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 3,
    name: 'Петрова Елена Сергеевна',
    email: 'petrova@technostart.ru',
    department: 'HR',
    status: 'issued',
    issueDate: '2024-09-15',
    activationDate: null,
    expiryDate: '2025-09-15',
    location: null,
    code: 'CERT-2024-003',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 4,
    name: 'Козлов Дмитрий Николаевич',
    email: 'kozlov@technostart.ru',
    department: 'Продажи',
    status: 'used',
    issueDate: '2024-08-10',
    activationDate: '2024-08-15',
    expiryDate: '2025-08-10',
    location: 'Алтай Mountain View',
    code: 'CERT-2024-004',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 5,
    name: 'Новикова Ольга Александровна',
    email: 'novikova@technostart.ru',
    department: 'Разработка',
    status: 'used',
    issueDate: '2024-08-10',
    activationDate: '2024-08-12',
    expiryDate: '2025-08-10',
    location: 'Байкал Nature Camp',
    code: 'CERT-2024-005',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 6,
    name: 'Волков Сергей Павлович',
    email: 'volkov@technostart.ru',
    department: 'Финансы',
    status: 'activated',
    issueDate: '2024-09-01',
    activationDate: '2024-09-05',
    expiryDate: '2025-09-01',
    location: null,
    code: 'CERT-2024-006',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 7,
    name: 'Морозова Анна Викторовна',
    email: 'morozova@technostart.ru',
    department: 'Маркетинг',
    status: 'issued',
    issueDate: '2024-10-01',
    activationDate: null,
    expiryDate: '2025-10-01',
    location: null,
    code: 'CERT-2024-007',
    issuedBy: 'Анна Сергеевна'
  },
  {
    id: 8,
    name: 'Соколов Игорь Владимирович',
    email: 'sokolov@technostart.ru',
    department: 'IT',
    status: 'expired',
    issueDate: '2023-10-15',
    activationDate: null,
    expiryDate: '2024-10-15',
    location: null,
    code: 'CERT-2023-008',
    issuedBy: 'Петров Игорь'
  },
]

export const CertificatesTab = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [departmentFilter, setDepartmentFilter] = useState('all')
  const [selectedCerts, setSelectedCerts] = useState<number[]>([])
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      used: { label: 'Использовано', className: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
      activated: { label: 'Активировано', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      issued: { label: 'Выдано', className: 'bg-amber-100 text-amber-700 border-amber-200' },
      expired: { label: 'Просрочено', className: 'bg-red-100 text-red-700 border-red-200' },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return (
      <Badge className={`${config.className} border`}>
        {config.label}
      </Badge>
    )
  }

  const filteredCertificates = mockCertificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.code.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || cert.status === statusFilter
    const matchesDepartment = departmentFilter === 'all' || cert.department === departmentFilter
    return matchesSearch && matchesStatus && matchesDepartment
  })

  const toggleSelectAll = () => {
    if (selectedCerts.length === filteredCertificates.length) {
      setSelectedCerts([])
    } else {
      setSelectedCerts(filteredCertificates.map(c => c.id))
    }
  }

  const toggleSelect = (id: number) => {
    if (selectedCerts.includes(id)) {
      setSelectedCerts(selectedCerts.filter(cid => cid !== id))
    } else {
      setSelectedCerts([...selectedCerts, id])
    }
  }

  const viewDetails = (cert: any) => {
    setSelectedCert(cert)
    setDetailsOpen(true)
  }

  const departments = ['all', ...Array.from(new Set(mockCertificates.map(c => c.department)))]

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Управление сертификатами</h2>
          <p className="text-sm text-gray-500 mt-1">
            {filteredCertificates.length} из {mockCertificates.length} сертификатов
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Package className="w-4 h-4 mr-2" />
            Выдать новые
          </Button>
          <Button variant="outline" className="border-gray-300">
            <Download className="w-4 h-4 mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="p-6 border-2 border-gray-100">
        <div className="space-y-4">
          {/* Search and Filter Toggle */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Поиск по имени, email или коду сертификата..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-gray-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200"
            >
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Статус</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все статусы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="used">Использовано</SelectItem>
                    <SelectItem value="activated">Активировано</SelectItem>
                    <SelectItem value="issued">Выдано</SelectItem>
                    <SelectItem value="expired">Просрочено</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Отдел</label>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все отделы" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept}>
                        {dept === 'all' ? 'Все отделы' : dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStatusFilter('all')
                    setDepartmentFilter('all')
                    setSearchQuery('')
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </Card>

      {/* Bulk Actions */}
      {selectedCerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-emerald-900">
                Выбрано: {selectedCerts.length}
              </span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="bg-white">
                <Send className="w-4 h-4 mr-2" />
                Отправить повторно
              </Button>
              <Button size="sm" variant="outline" className="bg-white">
                <Download className="w-4 h-4 mr-2" />
                Экспорт выбранных
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white"
                onClick={() => setSelectedCerts([])}
              >
                <X className="w-4 h-4 mr-2" />
                Отменить
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Table */}
      <Card className="border-2 border-gray-100">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <button onClick={toggleSelectAll} className="flex items-center justify-center">
                    {selectedCerts.length === filteredCertificates.length && filteredCertificates.length > 0 ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </TableHead>
                <TableHead>Код</TableHead>
                <TableHead>ФИО</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Отдел</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дата выдачи</TableHead>
                <TableHead>Активация</TableHead>
                <TableHead>Локация</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCertificates.map((cert) => (
                <TableRow key={cert.id} className={selectedCerts.includes(cert.id) ? 'bg-emerald-50' : ''}>
                  <TableCell>
                    <button onClick={() => toggleSelect(cert.id)} className="flex items-center justify-center">
                      {selectedCerts.includes(cert.id) ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-gray-600">{cert.code}</TableCell>
                  <TableCell className="font-medium">{cert.name}</TableCell>
                  <TableCell className="text-sm text-gray-600">{cert.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-50">
                      {cert.department}
                    </Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(cert.status)}</TableCell>
                  <TableCell className="text-sm text-gray-600">{cert.issueDate}</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {cert.activationDate || '—'}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {cert.location || '—'}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => viewDetails(cert)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Send className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Certificate Details Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Детали сертификата</DialogTitle>
            <DialogDescription>
              Полная информация о сертификате {selectedCert?.code}
            </DialogDescription>
          </DialogHeader>
          {selectedCert && (
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="flex items-center gap-3">
                {getStatusBadge(selectedCert.status)}
                <span className="text-sm text-gray-500">
                  Выдан {selectedCert.issueDate}
                </span>
              </div>

              {/* Employee Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">ФИО сотрудника</label>
                  <p className="font-semibold text-gray-900 mt-1">{selectedCert.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="font-semibold text-gray-900 mt-1">{selectedCert.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Отдел</label>
                  <p className="font-semibold text-gray-900 mt-1">{selectedCert.department}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Код сертификата</label>
                  <p className="font-mono text-gray-900 mt-1">{selectedCert.code}</p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-sm font-medium text-gray-500 mb-3 block">Timeline</label>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Выдан</p>
                      <p className="text-sm text-gray-600">{selectedCert.issueDate} • {selectedCert.issuedBy}</p>
                    </div>
                  </div>
                  {selectedCert.activationDate && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Активирован</p>
                        <p className="text-sm text-gray-600">{selectedCert.activationDate}</p>
                      </div>
                    </div>
                  )}
                  {selectedCert.location && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Использован</p>
                        <p className="text-sm text-gray-600">{selectedCert.location}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Истекает</p>
                      <p className="text-sm text-gray-600">{selectedCert.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <Button className="flex-1" variant="outline">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить повторно
                </Button>
                <Button className="flex-1" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать PDF
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
