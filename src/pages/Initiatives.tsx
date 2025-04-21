
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Recycle, Lightbulb, Wind, Globe, ExternalLink, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Initiatives = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Initiative categories
  const categories = [
    {
      id: 'climate',
      title: 'Зміни клімату',
      description: 'Адаптація до змін клімату та мінімізація впливу',
      icon: <Wind className="h-12 w-12 text-eco" />,
      color: 'bg-blue-100'
    },
    {
      id: 'conservation',
      title: 'Охорона природи',
      description: 'Збереження біорізноманіття та екосистем',
      icon: <TreePine className="h-12 w-12 text-eco" />,
      color: 'bg-green-100'
    },
    {
      id: 'sustainability',
      title: 'Сталий розвиток',
      description: 'Економічне зростання в гармонії з природою',
      icon: <Recycle className="h-12 w-12 text-eco" />,
      color: 'bg-amber-100'
    },
    {
      id: 'energy',
      title: 'Чиста енергія',
      description: 'Відновлювані джерела енергії та енергоефективність',
      icon: <Lightbulb className="h-12 w-12 text-eco" />,
      color: 'bg-yellow-100'
    }
  ];

  // Initiatives
  const initiatives = [
    {
      id: 1,
      title: 'Карпатська кліматична обсерваторія',
      category: 'climate',
      description: 'Проєкт зі створення кліматичної обсерваторії для моніторингу кліматичних змін у Карпатському регіоні та розробки стратегій адаптації.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      status: 'Діючий',
      organizator: 'Міністерство екології України',
      link: '#'
    },
    {
      id: 2,
      title: 'Відновлення екосистем Полісся',
      category: 'conservation',
      description: 'Програма відновлення водно-болотних угідь Полісся для збереження біорізноманіття та водних ресурсів регіону.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      status: 'Діючий',
      organizator: 'WWF Україна',
      link: '#'
    },
    {
      id: 3,
      title: 'Зелені міста України',
      category: 'sustainability',
      description: 'Програма розвитку міської екологічної інфраструктури, включаючи зелені насадження, енергоефективний транспорт та управління відходами.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      status: 'Діючий',
      organizator: 'Асоціація міст України',
      link: '#'
    },
    {
      id: 4,
      title: 'Енергетична незалежність громад',
      category: 'energy',
      description: 'Проєкт розвитку локальних енергетичних кооперативів з використанням відновлюваних джерел енергії для забезпечення енергетичної незалежності територіальних громад.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      status: 'Діючий',
      organizator: 'Енергетичне агентство України',
      link: '#'
    },
    {
      id: 5,
      title: 'Моніторинг чистоти повітря',
      category: 'climate',
      description: 'Мережа станцій моніторингу якості повітря з відкритими даними у реальному часі та системою сповіщень для громадян.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      status: 'Діючий',
      organizator: 'Громадська організація "Чисте повітря"',
      link: '#'
    },
    {
      id: 6,
      title: 'Захист природних заповідників',
      category: 'conservation',
      description: 'Проєкт з розширення мережі природних заповідників та національних парків України, а також посилення їх правового захисту.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
      status: 'Діючий',
      organizator: 'Міністерство екології України',
      link: '#'
    },
    {
      id: 7,
      title: 'Циркулярна економіка',
      category: 'sustainability',
      description: 'Впровадження принципів циркулярної економіки у виробництво та споживання для мінімізації відходів та ефективного використання ресурсів.',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      status: 'Діючий',
      organizator: 'Українська бізнес-асоціація',
      link: '#'
    },
    {
      id: 8,
      title: 'Енергоефективні школи',
      category: 'energy',
      description: 'Програма з модернізації енергетичної інфраструктури шкіл України для підвищення енергоефективності та екологічної освіти учнів.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      status: 'Діючий',
      organizator: 'Міністерство освіти і науки України',
      link: '#'
    }
  ];

  // Filter initiatives based on active category
  const filteredInitiatives = activeCategory
    ? initiatives.filter(initiative => initiative.category === activeCategory)
    : initiatives;

  // FAQs
  const faqs = [
    {
      question: 'Як я можу долучитися до екологічних ініціатив?',
      answer: 'Ви можете долучитися до наших ініціатив різними способами: стати волонтером, зробити пожертву, поширювати інформацію, впроваджувати екологічні практики у своєму житті або на своєму підприємстві. Щоб дізнатися більше про конкретні можливості, відвідайте сторінку контактів або зв\'яжіться з організаторами відповідних ініціатив.'
    },
    {
      question: 'Чи є фінансування для екологічних проєктів?',
      answer: 'Так, в Україні існують різні джерела фінансування екологічних проєктів, включаючи державний бюджет, гранти міжнародних організацій, приватні фонди та краудфандингові платформи. Ми регулярно публікуємо інформацію про доступні грантові можливості в розділі "Новини".'
    },
    {
      question: 'Як розрахувати свій вуглецевий слід?',
      answer: 'Для розрахунку вашого вуглецевого сліду ви можете використати наш онлайн-калькулятор у розділі "Контакти". Він враховує ваші транспортні звички, енергоспоживання, харчування та інші аспекти життя для визначення вашого впливу на клімат.'
    },
    {
      question: 'Чи співпрацюєте ви з бізнесом?',
      answer: 'Так, ми активно співпрацюємо з бізнесом у впровадженні екологічних практик, розробці стратегій сталого розвитку та реалізації корпоративної соціальної відповідальності. Для детальної інформації про можливості співпраці, будь ласка, зв\'яжіться з нами через форму на сторінці контактів.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-eco to-eco-dark text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Еко-ініціативи України</h1>
            <p className="text-xl mb-8">
              Ознайомтеся з проєктами та ініціативами, спрямованими на захист навколишнього 
              середовища та сталий розвиток України
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="#categories">
                Дізнатися більше
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Напрямки еко-ініціатив</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`p-6 rounded-lg flex flex-col items-center text-center transition-all hover-lift ${
                  activeCategory === category.id ? 'ring-2 ring-eco' : ''
                } ${category.color}`}
                onClick={() => setActiveCategory(
                  activeCategory === category.id ? null : category.id
                )}
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {activeCategory 
              ? `Ініціативи: ${categories.find(c => c.id === activeCategory)?.title}` 
              : 'Всі ініціативи'}
          </h2>
          
          {activeCategory && (
            <div className="text-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setActiveCategory(null)}
                className="text-muted-foreground"
              >
                Показати всі ініціативи
              </Button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredInitiatives.map((initiative) => (
              <Card key={initiative.id} id={initiative.category} className="overflow-hidden hover-lift">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                    <span className="bg-eco/10 text-eco px-2 py-1 text-xs rounded-full">
                      {initiative.status}
                    </span>
                  </div>
                  <CardDescription>
                    {categories.find(c => c.id === initiative.category)?.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{initiative.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{initiative.organizator}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-eco hover:text-eco-dark hover:bg-transparent p-0" asChild>
                    <a href={initiative.link} target="_blank" rel="noreferrer">
                      Дізнатися більше <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часті запитання</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Маєте інші запитання щодо екологічних ініціатив?
              </p>
              <Button asChild>
                <Link to="/contact">Зв'язатися з нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;
