import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Согласование целей',
    description: 'Определяем scope, цели тестирования и критерии успеха',
    icon: 'Target'
  },
  {
    id: 2,
    title: 'Разведка и анализ',
    description: 'OSINT, сканирование, mapping инфраструктуры',
    icon: 'Search'
  },
  {
    id: 3,
    title: 'Эксплуатация уязвимостей',
    description: 'Поиск и эксплуатация найденных уязвимостей',
    icon: 'Zap'
  },
  {
    id: 4,
    title: 'Отчёт и рекомендации',
    description: 'Техническая документация и бизнес-резюме',
    icon: 'FileText'
  },
  {
    id: 5,
    title: 'Обсуждение и обучение команды',
    description: 'Презентация результатов и передача знаний',
    icon: 'Users'
  }
];

interface ProcessTimelineProps {
  autoPlay?: boolean;
}

export default function ProcessTimeline({ autoPlay = true }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveStep(prev => (prev % processSteps.length) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="space-y-8">
      {/* Timeline Navigation */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                    : activeStep > step.id
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {activeStep > step.id ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <span className="font-semibold">{step.id}</span>
                )}
              </button>
              
              {index < processSteps.length - 1 && (
                <div className={`w-16 h-1 mx-2 rounded transition-colors duration-500 ${
                  activeStep > step.id ? 'bg-secondary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Step Content */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon 
                name={processSteps[activeStep - 1].icon as any} 
                size={32} 
                className="text-primary-foreground" 
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              {processSteps[activeStep - 1].title}
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {processSteps[activeStep - 1].description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step Details Grid */}
      <div className="grid md:grid-cols-5 gap-4">
        {processSteps.map((step) => (
          <Card 
            key={step.id}
            className={`cursor-pointer transition-all duration-300 ${
              activeStep === step.id 
                ? 'border-primary bg-primary/5 shadow-md' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => setActiveStep(step.id)}
          >
            <CardContent className="p-4 text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 ${
                activeStep === step.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={step.icon as any} size={16} />
              </div>
              <h4 className="text-sm font-medium">{step.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}