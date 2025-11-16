import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const matches = [
    { team1: 'Natus Vincere', team2: 'FaZe Clan', score: '16:14', map: 'Dust II', status: 'live' },
    { team1: 'G2 Esports', team2: 'Team Vitality', score: '13:16', map: 'Mirage', status: 'finished' },
    { team1: 'ENCE', team2: 'Cloud9', score: '19:17', map: 'Inferno', status: 'finished' }
  ];

  const players = [
    { name: 's1mple', team: 'Natus Vincere', rating: '1.28', kd: '1.45', flag: '🇺🇦' },
    { name: 'ZywOo', team: 'Team Vitality', rating: '1.26', kd: '1.42', flag: '🇫🇷' },
    { name: 'NiKo', team: 'G2 Esports', rating: '1.23', kd: '1.38', flag: '🇧🇦' },
    { name: 'device', team: 'Astralis', rating: '1.21', kd: '1.35', flag: '🇩🇰' }
  ];

  const tournaments = [
    { name: 'IEM Katowice 2025', date: '25 янв - 2 фев', prize: '$1,000,000', status: 'upcoming' },
    { name: 'BLAST Premier Spring', date: '8-12 фев', prize: '$425,000', status: 'upcoming' },
    { name: 'ESL Pro League S19', date: '1-17 мар', prize: '$850,000', status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crosshair" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold text-primary">CS2 PRO</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#matches" className="text-foreground hover:text-primary transition-colors">Матчи</a>
              <a href="#players" className="text-foreground hover:text-primary transition-colors">Игроки</a>
              <a href="#tournaments" className="text-foreground hover:text-primary transition-colors">Турниры</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 glow-effect">
              <Icon name="Bell" size={18} className="mr-2" />
              Уведомления
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-sm">
              <Icon name="Zap" size={16} className="mr-2 inline" />
              Counter-Strike 2
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              КИБЕРСПОРТ НОВОГО ПОКОЛЕНИЯ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Следите за профессиональными матчами, турнирами и статистикой лучших игроков CS2 в реальном времени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 glow-effect animate-pulse-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть прямой эфир
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6">
                <Icon name="Trophy" size={20} className="mr-2" />
                Турниры
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="matches" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              <Icon name="Flame" size={36} className="inline mr-3 text-primary" />
              Последние матчи
            </h2>
            <div className="flex gap-2">
              <Button variant={activeTab === 'live' ? 'default' : 'outline'} onClick={() => setActiveTab('live')}>
                В эфире
              </Button>
              <Button variant={activeTab === 'upcoming' ? 'default' : 'outline'} onClick={() => setActiveTab('upcoming')}>
                Предстоящие
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale overflow-hidden group">
                <CardContent className="p-6">
                  {match.status === 'live' && (
                    <Badge className="mb-4 bg-destructive text-destructive-foreground animate-pulse">
                      <Icon name="Radio" size={14} className="mr-1" />
                      LIVE
                    </Badge>
                  )}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center flex-1">
                      <p className="font-heading font-bold text-lg mb-1">{match.team1}</p>
                      <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-center px-4">
                      <p className="text-3xl font-heading font-black text-primary">{match.score}</p>
                    </div>
                    <div className="text-center flex-1">
                      <p className="font-heading font-bold text-lg mb-1">{match.team2}</p>
                      <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={24} className="text-secondary" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                      <Icon name="Map" size={14} className="inline mr-1" />
                      {match.map}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="players" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8 text-foreground">
            <Icon name="Star" size={36} className="inline mr-3 text-accent" />
            Топ игроки
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {players.map((player, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-accent transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl font-heading font-black text-muted-foreground">
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{player.flag}</span>
                          <h3 className="text-2xl font-heading font-bold text-foreground">{player.name}</h3>
                        </div>
                        <p className="text-muted-foreground">{player.team}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">Rating</span>
                        <p className="text-2xl font-heading font-bold text-accent">{player.rating}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">K/D</span>
                        <p className="text-xl font-heading font-bold text-secondary">{player.kd}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tournaments" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-8 text-foreground">
            <Icon name="Trophy" size={36} className="inline mr-3 text-secondary" />
            Предстоящие турниры
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tournaments.map((tournament, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-secondary transition-all duration-300 hover-scale glow-effect-blue">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{tournament.name}</h3>
                  <p className="text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} className="inline mr-1" />
                    {tournament.date}
                  </p>
                  <p className="text-2xl font-heading font-bold text-primary mb-4">{tournament.prize}</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center text-foreground">
            <Icon name="HelpCircle" size={36} className="inline mr-3 text-primary" />
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                Что такое Counter-Strike 2?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Counter-Strike 2 — это обновлённая версия легендарного шутера CS:GO на движке Source 2. Игра предлагает улучшенную графику, физику дыма, обновлённые карты и более реалистичный геймплей.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                Как смотреть профессиональные матчи?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Профессиональные матчи транслируются на платформах Twitch, YouTube и Steam.tv. Вы можете смотреть турниры в реальном времени или записи игр. Нажмите кнопку "Смотреть прямой эфир" выше, чтобы перейти к текущим трансляциям.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                Какие самые престижные турниры CS2?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Самые престижные турниры включают Major-чемпионаты (с призовым фондом $1,000,000+), IEM, BLAST Premier, ESL Pro League и PGL Major. Эти турниры собирают лучшие команды мира.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                Как начать играть в CS2?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                CS2 доступна бесплатно в Steam. Скачайте игру, пройдите обучение и начните с казуальных матчей. Для соревновательной игры рекомендуется освоить базовую стрельбу и изучить популярные карты.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crosshair" size={28} className="text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary">CS2 PRO</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Ваш источник актуальной информации о профессиональном киберспорте Counter-Strike 2
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#matches" className="hover:text-primary transition-colors">Матчи</a></li>
                <li><a href="#players" className="hover:text-primary transition-colors">Игроки</a></li>
                <li><a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center"><Icon name="Twitter" size={16} className="mr-2" /> Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center"><Icon name="Youtube" size={16} className="mr-2" /> YouTube</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center"><Icon name="MessageCircle" size={16} className="mr-2" /> Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Подписка</h4>
              <p className="text-muted-foreground text-sm mb-4">Получайте уведомления о важных матчах</p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Bell" size={16} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            © 2025 CS2 PRO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
