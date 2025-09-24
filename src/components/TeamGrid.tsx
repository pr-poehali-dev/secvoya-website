import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  id: string;
  level: string;
  experience: string;
  skills: string[];
  certifications: string[];
  specializations: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    level: 'Senior',
    experience: '10 лет',
    skills: ['Pentest', 'Web', 'AppSec/DevSecOps'],
    specializations: ['Integration', 'Compliance'],
    certifications: ['OSCP', 'CEH', 'CRTO']
  },
  {
    id: '2',
    level: 'Senior',
    experience: '10 лет',
    skills: ['Pentest', 'Web', 'AppSec'],
    specializations: ['DevSecOps', 'Mobile'],
    certifications: ['OSCP', 'CWAP', 'eJPT']
  },
  {
    id: '3',
    level: 'Middle',
    experience: '5 лет',
    skills: ['Pentest'],
    specializations: ['DevSecOps/AppSec', 'Web'],
    certifications: ['CEH', 'eJPT']
  },
  {
    id: '4',
    level: 'Middle',
    experience: '2 года',
    skills: ['Pentest', 'Web'],
    specializations: ['AppSec'],
    certifications: ['eJPT', 'eMAPT']
  },
  {
    id: '5',
    level: 'Junior',
    experience: '2 года',
    skills: ['Pentest', 'Web'],
    specializations: ['AppSec'],
    certifications: ['eJPT']
  },
  {
    id: '6',
    level: 'Junior',
    experience: '2 года',
    skills: ['Mobile', 'Web'],
    specializations: ['DevSecOps/AppSec', 'Pentest'],
    certifications: ['eMAPT', 'eJPT']
  }
];

export default function TeamGrid() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleCardHover = (id: string, isHovering: boolean) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (isHovering) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'senior':
        return 'bg-primary text-primary-foreground';
      case 'middle':
        return 'bg-orange text-white';
      case 'junior':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => {
        const isFlipped = flippedCards.has(member.id);
        
        return (
          <div
            key={member.id}
            className="relative h-64 perspective-1000"
            onMouseEnter={() => handleCardHover(member.id, true)}
            onMouseLeave={() => handleCardHover(member.id, false)}
          >
            <div
              className={`absolute inset-0 w-full h-full transition-transform duration-500 preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card */}
              <Card className="absolute inset-0 w-full h-full backface-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.level.substring(0, 1)}
                    </span>
                  </div>
                  <Badge className={`w-fit mx-auto mb-2 ${getLevelColor(member.level)}`}>
                    {member.level}
                  </Badge>
                  <CardTitle className="text-lg">{member.experience} опыта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Основные навыки:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center">Экспертиза</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Специализация:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specializations.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Сертификаты:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, index) => (
                        <Badge key={index} className="text-xs bg-orange text-white">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}