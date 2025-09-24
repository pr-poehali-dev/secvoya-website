import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { PentestType, CoverageType } from './PentestTabs';

interface QuoteRequestFormProps {
  pentestType?: PentestType;
  coverage?: CoverageType;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  pentestType: PentestType;
  coverage: CoverageType;
  hostsCount: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company: string;
  details: string;
  urgency: 'standard' | 'urgent' | 'critical';
}

const pentestTypeLabels: Record<PentestType, string> = {
  external: 'Внешний пентест',
  internal: 'Внутренний пентест',
  social: 'Социальная инженерия',
  wifi: 'Wi-Fi / беспроводные сети',
  web: 'Веб-приложения',
  mobile: 'Мобильные приложения',
  redteam: 'Red Team'
};

const coverageLabels: Record<CoverageType, string> = {
  quick: 'Quick (1-5 дн)',
  full: 'Full (2-4 нед)',
  redteam: 'Red Team (по согл.)'
};

export default function QuoteRequestForm({ 
  pentestType = 'external', 
  coverage = 'full', 
  onClose, 
  onSubmit 
}: QuoteRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    pentestType,
    coverage,
    hostsCount: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    company: '',
    details: '',
    urgency: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Icon name="Calculator" size={20} className="text-primary" />
          <span>Запросить оценку стоимости</span>
        </CardTitle>
        <CardDescription>
          Заполните форму, и мы подготовим индивидуальное предложение в течение 24 часов
        </CardDescription>
        
        <div className="flex items-center space-x-2 pt-2">
          <Badge className="bg-primary text-primary-foreground">
            {pentestTypeLabels[formData.pentestType]}
          </Badge>
          <Badge variant="outline">
            {coverageLabels[formData.coverage]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pentestType">Тип пентеста</Label>
              <Select 
                value={formData.pentestType} 
                onValueChange={(value: PentestType) => updateFormData('pentestType', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(pentestTypeLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverage">Покрытие</Label>
              <Select 
                value={formData.coverage} 
                onValueChange={(value: CoverageType) => updateFormData('coverage', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(coverageLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Scope */}
          <div className="space-y-2">
            <Label htmlFor="hostsCount">Количество хостов/модулей/приложений</Label>
            <Input
              id="hostsCount"
              placeholder="Например: 5 хостов, 3 веб-приложения"
              value={formData.hostsCount}
              onChange={(e) => updateFormData('hostsCount', e.target.value)}
              required
            />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName">Контактное лицо *</Label>
              <Input
                id="contactName"
                placeholder="Ваше имя"
                value={formData.contactName}
                onChange={(e) => updateFormData('contactName', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                placeholder="Название компании"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email *</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="your@company.com"
                value={formData.contactEmail}
                onChange={(e) => updateFormData('contactEmail', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPhone">Телефон</Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.contactPhone}
                onChange={(e) => updateFormData('contactPhone', e.target.value)}
              />
            </div>
          </div>

          {/* Urgency */}
          <div className="space-y-2">
            <Label htmlFor="urgency">Срочность</Label>
            <Select 
              value={formData.urgency} 
              onValueChange={(value: 'standard' | 'urgent' | 'critical') => updateFormData('urgency', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Стандартная (1-2 недели на начало)</SelectItem>
                <SelectItem value="urgent">Срочная (3-5 дней на начало) +30% к стоимости</SelectItem>
                <SelectItem value="critical">Критическая (24-48 часов) +50% к стоимости</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Details */}
          <div className="space-y-2">
            <Label htmlFor="details">Дополнительные детали</Label>
            <Textarea
              id="details"
              placeholder="Опишите особенности вашей инфраструктуры, специфические требования, или другую важную информацию..."
              value={formData.details}
              onChange={(e) => updateFormData('details', e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={16} className="mr-2" />
                  Запросить оценку
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}