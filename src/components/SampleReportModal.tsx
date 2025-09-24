import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface SampleReportModalProps {
  children: React.ReactNode;
}

export default function SampleReportModal({ children }: SampleReportModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    // В реальном приложении здесь был бы запрос на скачивание PDF
    console.log('Downloading sample report...');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Icon name="FileText" size={20} className="text-primary" />
            <span>Пример отчёта по пентесту</span>
          </DialogTitle>
          <DialogDescription>
            Демо-версия технического отчёта Secvoya по результатам внешнего пентеста
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {/* PDF Preview Mock */}
          <div className="bg-muted/30 rounded-lg p-6 space-y-6">
            
            {/* Cover Page */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Отчёт по результатам пентестирования
                </h1>
                <p className="text-gray-600">ООО "Тестовая компания"</p>
                <p className="text-sm text-gray-500 mt-4">
                  Период проведения: 15-29 марта 2024<br/>
                  Secvoya Security Team
                </p>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Icon name="BarChart" size={20} className="text-primary" />
                <span>Executive Summary</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  В ходе внешнего пентестирования инфраструктуры было обнаружено 
                  <span className="font-semibold text-red-600"> 3 критические</span>, 
                  <span className="font-semibold text-orange-600"> 7 высоких</span> и 
                  <span className="font-semibold text-yellow-600"> 12 средних</span> уязвимости.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-2">Критические</h3>
                    <div className="text-2xl font-bold text-red-600">3</div>
                    <p className="text-sm text-red-600">Требуют немедленного устранения</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-2">Высокие</h3>
                    <div className="text-2xl font-bold text-orange-600">7</div>
                    <p className="text-sm text-orange-600">Устранить в течение недели</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-2">Средние</h3>
                    <div className="text-2xl font-bold text-yellow-600">12</div>
                    <p className="text-sm text-yellow-600">Устранить в плановом порядке</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Vulnerability */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Icon name="AlertTriangle" size={20} className="text-red-600" />
                <span>Пример уязвимости</span>
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-red-800">SQL Injection в параметре login</h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">CRITICAL</span>
                      <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">CVSS 9.8</span>
                    </div>
                  </div>
                  <p className="text-red-700 text-sm">
                    <strong>URL:</strong> https://example.com/login.php?user=[PAYLOAD]
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Описание:</h4>
                    <p className="text-sm text-gray-700">
                      Обнаружена SQL-инъекция в параметре user формы авторизации. 
                      Уязвимость позволяет получить полный доступ к базе данных.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">PoC:</h4>
                    <div className="bg-gray-900 text-green-400 p-2 rounded text-xs font-mono">
                      user=' OR 1=1 UNION SELECT user,pass FROM admin--
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Рекомендации:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Использовать параметризованные запросы</li>
                    <li>• Валидировать входные данные</li>
                    <li>• Применить принцип минимальных привилегий для БД</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Roadmap Preview */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Icon name="Map" size={20} className="text-primary" />
                <span>Дорожная карта исправлений</span>
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4 p-3 bg-red-50 rounded-lg">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Неделя 1: Критические уязвимости</p>
                    <p className="text-sm text-gray-600">SQL Injection, RCE, Privilege Escalation</p>
                  </div>
                  <span className="text-sm text-gray-500">3 задачи</span>
                </div>
                
                <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Неделя 2-3: Высокие уязвимости</p>
                    <p className="text-sm text-gray-600">XSS, CSRF, Information Disclosure</p>
                  </div>
                  <span className="text-sm text-gray-500">7 задач</span>
                </div>
                
                <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Месяц 1-2: Средние уязвимости</p>
                    <p className="text-sm text-gray-600">Security headers, SSL/TLS config</p>
                  </div>
                  <span className="text-sm text-gray-500">12 задач</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                Полная версия отчёта содержит 47 страниц технических деталей,
                скриншоты, логи и подробные рекомендации.
              </p>
            </div>
          </div>
        </div>

        <Separator />
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Пример отчёта • Secvoya Security Team
          </p>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Закрыть
            </Button>
            <Button onClick={handleDownload}>
              <Icon name="Download" size={16} className="mr-2" />
              Скачать PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}