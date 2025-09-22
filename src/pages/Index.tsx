import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [activeService, setActiveService] = useState<'pentest' | 'appsec'>('pentest');
  const navigate = useNavigate();

  const handleServiceChange = (service: 'pentest' | 'appsec') => {
    setActiveService(service);
    if (service === 'pentest') {
      navigate('/pentest');
    } else {
      navigate('/appsec');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-12">
        <img 
          src="https://cdn.poehali.dev/files/d65cf35b-734d-408e-b02c-102776cabda9.png" 
          alt="Secvoya Logo" 
          className="w-32 h-32 object-contain mx-auto"
        />
        <h1 className="text-3xl font-bold text-center mt-6 text-foreground">
          Secvoya
        </h1>
        <p className="text-lg text-muted-foreground text-center mt-2">
          Кибербезопасность как процесс
        </p>
      </div>

      {/* iPhone-style Service Toggle */}
      <div className="flex justify-center mb-8">
        <div className="relative bg-muted p-1 rounded-xl border border-border shadow-inner">
          <div 
            className={`absolute top-1 bottom-1 rounded-lg bg-background shadow-md transition-all duration-300 ease-in-out ${
              activeService === 'pentest' ? 'left-1 right-1/2' : 'left-1/2 right-1'
            }`}
          />
          <div className="relative flex">
            <button
              onClick={() => handleServiceChange('pentest')}
              className={`px-8 py-4 text-base font-medium rounded-lg transition-colors duration-200 z-10 ${
                activeService === 'pentest' 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pentest
            </button>
            <button
              onClick={() => handleServiceChange('appsec')}
              className={`px-8 py-4 text-base font-medium rounded-lg transition-colors duration-200 z-10 ${
                activeService === 'appsec' 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              AppSec
            </button>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="text-center max-w-2xl">
        {activeService === 'pentest' ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Тестирование на проникновение
            </h2>
            <p className="text-lg text-muted-foreground">
              Комплексная оценка защищенности инфраструктуры, веб-приложений и мобильных решений
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Безопасность приложений
            </h2>
            <p className="text-lg text-muted-foreground">
              Внедрение культуры безопасной разработки и DevSecOps практик в жизненный цикл разработки
            </p>
          </div>
        )}
      </div>
    </div>
  );
}