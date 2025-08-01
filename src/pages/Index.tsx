import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Secvoya</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#methodology" className="text-muted-foreground hover:text-foreground transition-colors">Методология</a>
              <a href="#gost" className="text-muted-foreground hover:text-foreground transition-colors">ГОСТ</a>
              <Button size="sm">Консультация</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Безопасная разработка —<br />
              <span className="text-secondary">как процесс, а не как услуга</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Выстраиваем DevSecOps и внедряем AppSec на уровне культуры, а не галочек.
              Автоматизируем безопасность в CI/CD без компромиссов по скорости релизов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8">
                <Icon name="Calendar" size={18} className="mr-2" />
                Запросить аудит
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Play" size={18} className="mr-2" />
                Получить демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Кому мы нужны</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-secondary" />
                </div>
                <CardTitle>Разработчики и техдиры</CardTitle>
                <CardDescription>
                  Хотите ускорять релизы без компромиссов по безопасности?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Интегрируем безопасность в ваш pipeline так, чтобы она помогала, а не мешала разработке.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-secondary" />
                </div>
                <CardTitle>Безопасники</CardTitle>
                <CardDescription>
                  Ищете, кто настроит безопасную разработку под ГОСТ, а не просто продаст СЗИ?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Настраиваем процессы и культуру, которые реально работают, а не существуют для галочки.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-secondary" />
                </div>
                <CardTitle>Бизнес</CardTitle>
                <CardDescription>
                  Не хотим платить за уязвимости, проще выстроить процесс один раз
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Инвестируем в долгосрочное решение, которое снизит риски и ускорит time-to-market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Чем мы отличаемся</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Target" size={16} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Глубокая специализация: только AppSec</h3>
                  <p className="text-muted-foreground">Мы не универсальные консультанты — мы эксперты именно в безопасности приложений и DevSecOps.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="FileCheck" size={16} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Экспертиза по ГОСТ Р 56939-2024</h3>
                  <p className="text-muted-foreground">Знаем стандарт не как документ, а как живой инструмент для повышения зрелости процессов.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Zap" size={16} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Автоматизация, а не ручные проверки</h3>
                  <p className="text-muted-foreground">Внедряем SAST, DAST, SCA и secrets detection в ваш pipeline, а не предлагаем разовые аудиты.</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Реальные практики DevSecOps</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm">Shift Left Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm">Pipeline Hardening</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm">Infrastructure as Code Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm">Policy as Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm">SBOM Generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Структурируем не по типу задач, а по ценности для клиента
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Аудит</Badge>
                <CardTitle>Аудит процессов разработки и ИБ</CardTitle>
                <CardDescription>
                  Комплексная оценка зрелости процессов по ГОСТ Р 56939-2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Gap-анализ текущих процессов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Аудит пайплайна CI/CD</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Архитектурный обзор решений</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Политика управления зависимостями</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Внедрение</Badge>
                <CardTitle>DevSecOps процессы</CardTitle>
                <CardDescription>
                  Полная интеграция безопасности в жизненный цикл разработки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Интеграция в CI/CD (GitLab, GitHub Actions)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Threat modeling и SAST/DAST/SCA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>IaC security и policy-as-code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>SBOM и secrets detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Инструменты</Badge>
                <CardTitle>Подбор и внедрение AppSec-решений</CardTitle>
                <CardDescription>
                  Выбираем инструменты под ваши задачи, а не продаем готовые решения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Open Source и Enterprise решения</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Техническое обоснование выбора</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Настройка и кастомизация</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Обучение команды работе с инструментами</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Развитие</Badge>
                <CardTitle>Обучение и сопровождение</CardTitle>
                <CardDescription>
                  Формируем культуру secure coding и измеряем прогресс
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Культура secure coding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Интенсивы и воркшопы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>Практические тренинги</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" size={16} className="text-secondary" />
                    <span>KPI для внедрения DevSecOps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Методология</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" size={24} className="text-destructive" />
                </div>
                <CardTitle className="text-lg">Не начинаем с инструмента</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Сначала понимаем процессы, затем выбираем решения. «Одна кнопка SAST» не решает проблему безопасности.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">ГОСТ — не про бумажки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ГОСТ Р 56939-2024 — это про зрелость процессов и культуру, а не про формальное соответствие документации.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Workflow" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Рутина, не барьер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Превращаем безопасность в автоматическую часть workflow, которая ускоряет, а не замедляет разработку.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-center">Maturity Models в основе подхода</CardTitle>
              <CardDescription className="text-center">
                Используем проверенные модели зрелости для оценки и развития процессов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={20} className="text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">SAMM</h4>
                  <p className="text-sm text-muted-foreground">Software Assurance Maturity Model</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Building" size={20} className="text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">BSIMM</h4>
                  <p className="text-sm text-muted-foreground">Building Security In Maturity Model</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Award" size={20} className="text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">BSA</h4>
                  <p className="text-sm text-muted-foreground">Building Security Assessment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GOST Section */}
      <section id="gost" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ГОСТ Р 56939-2024</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Требования стандарта простым языком и практические шаги для соответствия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={20} />
                  <span>Что требует ГОСТ</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-medium">Процессы безопасной разработки</h4>
                    <p className="text-sm text-muted-foreground">Формализованные процедуры на всех этапах SDLC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-medium">Управление уязвимостями</h4>
                    <p className="text-sm text-muted-foreground">Обнаружение, приоритизация и устранение</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-medium">Контроль качества кода</h4>
                    <p className="text-sm text-muted-foreground">Статический и динамический анализ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <h4 className="font-medium">Управление зависимостями</h4>
                    <p className="text-sm text-muted-foreground">Контроль третьесторонних компонентов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="CheckSquare" size={20} />
                  <span>Наши действия</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="ArrowRight" size={16} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium">DevSecOps pipeline</h4>
                    <p className="text-sm text-muted-foreground">Автоматизация проверок безопасности в CI/CD</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="ArrowRight" size={16} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium">Threat modeling</h4>
                    <p className="text-sm text-muted-foreground">Систематический анализ угроз на этапе дизайна</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="ArrowRight" size={16} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium">SAST/DAST/SCA интеграция</h4>
                    <p className="text-sm text-muted-foreground">Комплексный анализ кода и зависимостей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="ArrowRight" size={16} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-medium">SBOM генерация</h4>
                    <p className="text-sm text-muted-foreground">Полная прозрачность состава приложения</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать чек-лист соответствия ГОСТ
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Получите предварительный аудит процессов разработки или запишитесь на демо наших решений
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="px-8">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Получить предварительный аудит
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Video" size={18} className="mr-2" />
              Записаться на демо
            </Button>
          </div>

          <Separator className="my-8" />
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-2 text-secondary" />
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-muted-foreground">info@secvoya.ru</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={24} className="mx-auto mb-2 text-secondary" />
              <h4 className="font-semibold mb-1">Telegram</h4>
              <p className="text-muted-foreground">@secvoya_support</p>
            </div>
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-2 text-secondary" />
              <h4 className="font-semibold mb-1">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 000-00-00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Secvoya</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Secvoya. Безопасная разработка как процесс.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}