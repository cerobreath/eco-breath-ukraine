
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Calculator, Github, Twitter, Facebook, Car, Home, ShoppingBag, Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Contact = () => {
  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Carbon calculator state
  const [carbonData, setcarbonData] = useState({
    transportation: 5,
    housing: 5,
    food: 5,
    goods: 5
  });
  
  const [carbonResult, setCarbonResult] = useState<number | null>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      // Simulate successful submission
      setFormStatus('success');
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  // Handle carbon slider changes
  const handleSliderChange = (name: keyof typeof carbonData, value: number[]) => {
    setcarbonData(prev => ({ ...prev, [name]: value[0] }));
  };

  // Calculate carbon footprint
  const calculateCarbonFootprint = () => {
    // Simple calculation for demonstration
    // In a real app, you would use more complex calculations based on scientific models
    const { transportation, housing, food, goods } = carbonData;
    const result = (transportation * 0.5) + (housing * 0.3) + (food * 0.2) + (goods * 0.1);
    setCarbonResult(parseFloat(result.toFixed(2)));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-eco-light">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Зв'яжіться з нами</h1>
            <p className="text-lg text-muted-foreground">
              Маєте питання, пропозиції або бажаєте долучитися до наших ініціатив? 
              Зв'яжіться з нами, і ми з радістю вам допоможемо.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto bg-eco/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-eco" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Напишіть нам</p>
                <p className="font-medium">info@ecobreath.ua</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto bg-eco/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-eco" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Зателефонуйте нам</p>
                <p className="font-medium">+380 44 123 4567</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto bg-eco/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-eco" />
                </div>
                <CardTitle>Адреса</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Завітайте до нас</p>
                <p className="font-medium">м. Київ, вул. Хрещатик, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Tabs (Form and Carbon Calculator) */}
      <section className="py-12 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="contact-form">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact-form">Зворотній зв'язок</TabsTrigger>
                <TabsTrigger value="carbon-calculator">Калькулятор вуглецевого сліду</TabsTrigger>
              </TabsList>
              
              {/* Contact Form */}
              <TabsContent value="contact-form">
                <Card>
                  <CardHeader>
                    <CardTitle>Надішліть нам повідомлення</CardTitle>
                    <CardDescription>
                      Заповніть форму нижче, і ми зв'яжемося з вами якнайшвидше.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formStatus === 'success' && (
                      <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                        <Leaf className="h-4 w-4" />
                        <AlertTitle>Дякуємо!</AlertTitle>
                        <AlertDescription>
                          Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {formStatus === 'error' && (
                      <Alert variant="destructive" className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Помилка</AlertTitle>
                        <AlertDescription>
                          Під час надсилання повідомлення сталася помилка. Будь ласка, спробуйте ще раз.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ім'я та прізвище</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="Введіть ваше ім'я"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="Введіть ваш email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Тема</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleInputChange}
                          placeholder="Тема повідомлення"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Повідомлення</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          placeholder="Ваше повідомлення"
                          rows={6}
                          required
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" onClick={handleSubmit} className="w-full bg-eco hover:bg-eco-dark">
                      Надіслати повідомлення <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Carbon Calculator */}
              <TabsContent value="carbon-calculator">
                <Card>
                  <CardHeader>
                    <CardTitle>Розрахуйте свій вуглецевий слід</CardTitle>
                    <CardDescription>
                      Використовуйте цей інтерактивний калькулятор, щоб оцінити свій вплив на клімат та знайти шляхи його зменшення.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Car className="h-5 w-5 text-eco mr-2" />
                            <Label>Транспорт</Label>
                          </div>
                          <span className="font-medium">{carbonData.transportation}</span>
                        </div>
                        <Slider
                          defaultValue={[carbonData.transportation]}
                          max={10}
                          step={1}
                          onValueChange={(value) => handleSliderChange('transportation', value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Змініть значення залежно від того, скільки ви використовуєте власний транспорт, громадський транспорт або авіаперельоти.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Home className="h-5 w-5 text-eco mr-2" />
                            <Label>Житло</Label>
                          </div>
                          <span className="font-medium">{carbonData.housing}</span>
                        </div>
                        <Slider
                          defaultValue={[carbonData.housing]}
                          max={10}
                          step={1}
                          onValueChange={(value) => handleSliderChange('housing', value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Змініть значення залежно від розміру вашого житла, його енергоефективності та джерел енергії, які ви використовуєте.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ShoppingBag className="h-5 w-5 text-eco mr-2" />
                            <Label>Харчування</Label>
                          </div>
                          <span className="font-medium">{carbonData.food}</span>
                        </div>
                        <Slider
                          defaultValue={[carbonData.food]}
                          max={10}
                          step={1}
                          onValueChange={(value) => handleSliderChange('food', value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Змініть значення залежно від вашої дієти (м'ясна, вегетаріанська, веганська) та кількості локальних продуктів, які ви споживаєте.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ShoppingBag className="h-5 w-5 text-eco mr-2" />
                            <Label>Споживання товарів</Label>
                          </div>
                          <span className="font-medium">{carbonData.goods}</span>
                        </div>
                        <Slider
                          defaultValue={[carbonData.goods]}
                          max={10}
                          step={1}
                          onValueChange={(value) => handleSliderChange('goods', value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Змініть значення залежно від кількості товарів, які ви купуєте, та як часто ви оновлюєте техніку, одяг тощо.
                        </p>
                      </div>
                    </div>
                    
                    {carbonResult !== null && (
                      <div className="mt-8 p-4 bg-eco/10 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Результат</h3>
                        <p className="text-3xl font-bold text-eco">{carbonResult} т CO2</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Ваш орієнтовний вуглецевий слід на рік. Середній показник для України становить приблизно 5 тонн CO2 на людину на рік.
                        </p>
                        
                        <Separator className="my-4" />
                        
                        <h4 className="font-medium mb-2">Рекомендації щодо зменшення впливу:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Зменшіть використання автомобіля, надаючи перевагу громадському транспорту, велосипеду або ходьбі.</li>
                          <li>Підвищіть енергоефективність вашого житла, встановивши кращу ізоляцію та енергоефективні прилади.</li>
                          <li>Споживайте більше рослинної їжі та менше м'яса.</li>
                          <li>Купуйте менше нових товарів, віддаючи перевагу вживаним, відремонтованим або довговічним виробам.</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button onClick={calculateCarbonFootprint} className="w-full bg-eco hover:bg-eco-dark">
                      Розрахувати вуглецевий слід <Calculator className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Слідкуйте за нами</h2>
            <p className="text-muted-foreground mb-8">
              Приєднуйтесь до нашої спільноти в соціальних мережах, щоб бути в курсі останніх новин та подій.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Facebook className="h-6 w-6 text-eco" />
              </a>
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Twitter className="h-6 w-6 text-eco" />
              </a>
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Github className="h-6 w-6 text-eco" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
