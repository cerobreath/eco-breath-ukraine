import React, { useState, useRef } from 'react';
import { Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Всі новини');
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  const newsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const newsCategories = ['Всі новини', 'Клімат', 'Природа', 'Енергетика', 'Політика'];

  const featuredNews = {
    title: 'Екологічне законодавство України: новий етап розвитку',
    date: '18 квітня 2025',
    category: 'Політика',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    content: `Верховна Рада України прийняла новий пакет законів, спрямованих на посилення 
    екологічного законодавства та наближення його до стандартів ЄС. Експерти вважають 
    це важливим кроком на шляху України до сталого розвитку та євроінтеграції.`
  };

  const allNews = [
    {
      title: 'Нова програма відновлення лісів у Карпатах',
      date: '15 квітня 2025',
      category: 'Природа',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      content: `Міністерство екології презентувало нову програму відновлення лісових масивів у Карпатському регіоні. 
      Програма передбачає висадку понад 2 мільйонів нових дерев до кінця 2025 року, а також залучення місцевих громад до процесу відновлення екосистем. Особлива увага приділяється збереженню унікальних видів флори та фауни, а також боротьбі з незаконною вирубкою лісу.`
    },
    {
      title: 'Україна збільшує площу природоохоронних зон',
      date: '10 квітня 2025',
      category: 'Природа',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      content: `П'ять нових національних парків буде створено протягом наступного року в рамках програми розширення природоохоронних територій. Цей крок дозволить зберегти рідкісні види тварин і рослин, а також створити нові можливості для екотуризму. За словами міністра екології, загальна площа охоронних зон зросте на 10%.`
    },
    {
      title: 'Кількість сонячних електростанцій зросла на 30%',
      date: '2 квітня 2025',
      category: 'Енергетика',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      content: `За останній рік кількість сонячних електростанцій в Україні зросла на 30%. Це пов'язано з державною підтримкою зеленої енергетики та підвищенням обізнаності населення про переваги відновлюваних джерел енергії. Влада планує збільшувати частку сонячної енергетики в енергетичному балансі країни й надалі.`
    },
    {
      title: 'Міжнародна конференція з питань клімату в Києві',
      date: '28 березня 2025',
      category: 'Клімат',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
      content: `У Києві відбулася міжнародна конференція з питань змін клімату та адаптації. 
      Участь взяли понад 200 експертів із різних країн. Основні теми: скорочення викидів CO2, відновлення лісів і адаптація сільського господарства до нових кліматичних умов. Підписано кілька партнерських угод щодо спільних досліджень.`
    },
    {
      title: 'Новий екологічний податок для підприємств',
      date: '20 березня 2025',
      category: 'Політика',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      content: `Верховна Рада прийняла закон про новий екологічний податок для підприємств, які не дотримуються вимог щодо охорони навколишнього середовища. Закон розроблено з метою стимулювання бізнесу до впровадження екологічних технологій. За порушення встановлених норм передбачено суворі штрафи.`
    },
    {
      title: 'Проєкт "Зелені міста України" стартував у п\'яти містах',
      date: '15 березня 2025',
      category: 'Природа',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      content: `П'ять міст України розпочали участь у проєкті "Зелені міста", який передбачає розбудову парків, велодоріжок та збільшення кількості зелених зон. Проєкт має на меті покращити якість повітря, підвищити рівень комфорту та залучити мешканців до екологічних ініціатив.`
    },
    {
      title: 'Дослідження: як зміни клімату впливають на Чорне море',
      date: '5 березня 2025',
      category: 'Клімат',
      image: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170',
      content: `Нове дослідження українських вчених показало, як зміни клімату впливають на екосистему Чорного моря. Зареєстровано підвищення температури води і зменшення чисельності окремих видів риб. Автори дослідження радять посилити моніторинг та реалізувати комплексні заходи з адаптації.`
    },
    {
      title: 'Енергоефективність в Україні: огляд ситуації',
      date: '26 лютого 2025',
      category: 'Енергетика',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
      content: `Аналітичний огляд стану енергоефективності в Україні показав, що за останні 5 років країна значно просунулась у впровадженні енергозберігаючих технологій. 
      Однак експерти вказують на необхідність подальшої модернізації житлового фонду та актуалізації державних програм.`
    }
  ];

  // Категорійний фільтр
  const categoryFilter = selectedCategory === 'Всі новини'
      ? allNews
      : allNews.filter(news => news.category === selectedCategory);

  // Фільтр пошуку
  const filteredNews = categoryFilter.filter(news =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (index: number) => {
    if (expandedNews === index) {
      setExpandedNews(null);
    } else {
      setExpandedNews(index);

      // Прокрутити до картки з новиною (з затримкою рендеру)
      setTimeout(() => {
        if (newsRefs.current[index]) {
          newsRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
      <div className="min-h-screen pt-20">
        {/* Hero Section with Featured News */}
        <section className="py-12 bg-eco-light">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Еко Новини</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Актуальна інформація про екологічні події, ініціативи та досягнення в Україні та світі
                </p>

                <div className="mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-eco mr-2" />
                  <span className="text-sm text-muted-foreground">{featuredNews.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm bg-eco/10 text-eco px-2 py-1 rounded-full">
                  {featuredNews.category}
                </span>
                </div>

                <h2 className="text-2xl font-bold mb-4">{featuredNews.title}</h2>
                <p className="mb-6">{featuredNews.content}</p>

                <Button className="bg-eco hover:bg-eco-dark">
                  Читати повністю
                </Button>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Listing Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            {/* Search and Filter */}
            <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                    type="text"
                    placeholder="Пошук новин..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Tabs
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  className="w-full md:w-auto"
              >
                <TabsList>
                  {newsCategories.map((category) => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <Separator className="mb-10" />

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                  <Card
                      key={index}
                      className="overflow-hidden hover-lift"
                      ref={el => { newsRefs.current[index] = el; }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <span className="text-sm text-muted-foreground">{news.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-xs bg-eco/10 text-eco px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                      </div>
                      <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={expandedNews === index ? "mb-2 text-muted-foreground whitespace-pre-line" : "line-clamp-3 text-muted-foreground"}>
                        {news.content}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                          variant="ghost"
                          className="text-eco px-0 hover:bg-transparent hover:text-eco-dark"
                          onClick={() => handleToggle(index)}
                      >
                        {expandedNews === index ? 'Згорнути' : 'Читати далі'}
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>

            {filteredNews.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">Новин не знайдено</h3>
                  <p className="text-muted-foreground">
                    Спробуйте змінити параметри пошуку або категорію
                  </p>
                </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-1">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="outline" size="icon" className="bg-eco text-white hover:bg-eco-dark">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default News;