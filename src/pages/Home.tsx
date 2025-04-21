
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, TreePine, Recycle, Lightbulb, Wind, Waves, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const [email, setEmail] = useState('');

  // Hero section background image
  const heroBackground = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const categoryData = [
    {
      title: 'Зміни клімату',
      description: 'Вплив змін клімату на екосистеми України та шляхи адаптації.',
      icon: <Wind className="h-12 w-12 text-eco" />,
      link: '/initiatives#climate'
    },
    {
      title: 'Охорона природи',
      description: 'Програми та ініціативи зі збереження біорізноманіття.',
      icon: <TreePine className="h-12 w-12 text-eco" />,
      link: '/initiatives#conservation'
    },
    {
      title: 'Сталий розвиток',
      description: 'Стратегії економічного розвитку з турботою про довкілля.',
      icon: <Recycle className="h-12 w-12 text-eco" />,
      link: '/initiatives#sustainability'
    },
    {
      title: 'Чиста енергія',
      description: 'Розвиток відновлюваних джерел енергії в Україні.',
      icon: <Lightbulb className="h-12 w-12 text-eco" />,
      link: '/initiatives#energy'
    }
  ];

  const news = [
    {
      title: 'Нова програма відновлення лісів у Карпатах',
      date: '15 квітня 2025',
      excerpt: 'Міністерство екології презентувало нову програму відновлення лісових масивів у Карпатському регіоні...',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
    },
    {
      title: 'Україна збільшує площу природоохоронних зон',
      date: '10 квітня 2025',
      excerpt: 'П\'ять нових національних парків буде створено протягом наступного року в рамках програми...',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      title: 'Кількість сонячних електростанцій зросла на 30%',
      date: '2 квітня 2025',
      excerpt: 'За останній рік кількість сонячних електростанцій в Україні зросла на 30%. Це пов\'язано з...',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Дякуємо за підписку! ' + email);
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        style={heroBackground}
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Відповідальність за майбутнє<br />починається сьогодні
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Інформаційний ресурс про екологію, збереження природи, 
            зміни клімату та сталий розвиток в Україні
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-eco hover:bg-eco-dark">
              <Link to="/initiatives">Дізнатися більше</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-black border-white hover:bg-gray-200">
              <Link to="/contact">Долучитися</Link>
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Leaf className="h-10 w-10 text-eco" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Напрямки діяльності</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ми охоплюємо основні сфери екологічної діяльності, щоб надати вам найбільш повну інформацію
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryData.map((category, index) => (
              <div key={index} className="eco-card text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="link" asChild className="text-eco">
                  <Link to={category.link}>
                    Дізнатися більше <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Waves className="h-10 w-10 text-eco-water" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Останні новини</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальні новини та події у сфері екології та захисту навколишнього середовища
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-eco" asChild>
                    <Link to="/news">
                      Читати далі <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/news">Всі новини</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-eco to-eco-dark text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Залишайтеся з нами на зв'язку</h2>
            <p className="text-lg mb-8">
              Підпишіться на нашу розсилку, щоб отримувати актуальні новини та інформацію 
              про екологічні події в Україні
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                required
                className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-white text-foreground"
              />
              <Button type="submit" variant="secondary" className="py-3 px-6">
                Підписатися
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
