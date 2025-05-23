// Імпорт React і хука useState для управління станом форми та калькулятора
import React, { useState } from 'react';
// Імпорт іконок із бібліотеки lucide-react для візуального оформлення
import { 
  Mail, Phone, MapPin, Send, Calculator, Instagram, Twitter, Facebook, Car, Home, ShoppingBag, Leaf, AlertCircle
} from 'lucide-react';
// Імпорт компонента Button із бібліотеки shadcn-ui для створення кнопок
import { Button } from '@/components/ui/button';
// Імпорт компонентів Card із бібліотеки shadcn-ui для відображення інформації
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// Імпорт компонентів Tabs із бібліотеки shadcn-ui для перемикання між формою та калькулятором
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Імпорт компонента Input із бібліотеки shadcn-ui для полів введення
import { Input } from '@/components/ui/input';
// Імпорт компонента Textarea із бібліотеки shadcn-ui для текстового поля
import { Textarea } from '@/components/ui/textarea';
// Імпорт компонента Label із бібліотеки shadcn-ui для міток полів
import { Label } from '@/components/ui/label';
// Імпорт компонента Slider із бібліотеки shadcn-ui для калькулятора
import { Slider } from '@/components/ui/slider';
// Імпорт компонента Separator із бібліотеки shadcn-ui для роздільної лінії
import { Separator } from '@/components/ui/separator';
// Імпорт компонентів Alert із бібліотеки shadcn-ui для відображення повідомлень
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Визначення компонента Contact для відображення сторінки контактів
const Contact = () => {
  // Створення стану formState для зберігання даних форми зворотного зв’язку
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Створення стану formStatus для відстеження статусу відправлення форми
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Створення стану formErrors для зберігання помилок валідації форми
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Створення стану carbonData для зберігання даних калькулятора вуглецевого сліду
  const [carbonData, setCarbonData] = useState({
    transportation: 5,
    housing: 5,
    food: 5,
    goods: 5
  });
  
  // Створення стану carbonResult для зберігання результату калькулятора
  const [carbonResult, setCarbonResult] = useState<number | null>(null);

  // Функція для валідації форми перед відправленням
  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    // Перевірка обов’язковості поля name
    if (!formState.name.trim()) {
      errors.name = 'Ім’я та прізвище є обов’язковими';
      isValid = false;
    }

    // Перевірка обов’язковості та формату email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      errors.email = 'Email є обов’язковим';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      errors.email = 'Введіть коректний email';
      isValid = false;
    }

    // Перевірка обов’язковості поля subject
    if (!formState.subject.trim()) {
      errors.subject = 'Тема є обов’язковою';
      isValid = false;
    }

    // Перевірка обов’язковості поля message
    if (!formState.message.trim()) {
      errors.message = 'Повідомлення є обов’язковим';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Обробка змін у полях форми
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Очищення помилки для поля при зміні його значення
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Обробка відправлення форми
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Перевірка валідації форми
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    // Імітація відправлення даних на сервер
    console.log('Form submitted:', formState);
    
    // Імітація асинхронного відправлення
    setTimeout(() => {
      // Успішне відправлення
      setFormStatus('success');
      
      // Скидання форми після відправлення
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Скидання помилок
      setFormErrors({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Скидання статусу форми після затримки
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  // Обробка змін у слайдерах калькулятора
  const handleSliderChange = (name: keyof typeof carbonData, value: number[]) => {
    setCarbonData(prev => ({ ...prev, [name]: value[0] }));
  };

  // Розрахунок вуглецевого сліду
  const calculateCarbonFootprint = () => {
    // Проста формула для демонстрації
    const { transportation, housing, food, goods } = carbonData;
    const result = (transportation * 0.5) + (housing * 0.3) + (food * 0.2) + (goods * 0.1);
    setCarbonResult(parseFloat(result.toFixed(2)));
  };

  // Рендеринг сторінки контактів із секціями
  return (
    <div className="min-h-screen pt-20">
      {/* Секція Hero */}
      <section className="py-12 bg-eco-light">
        {/* Контейнер для контенту */}
        <div className="container px-4 mx-auto">
          {/* Текст у центрі */}
          <div className="max-w-3xl mx-auto text-center">
            {/* Заголовок секції */}
            <h1 className="text-4xl font-bold mb-4">Зв'яжіться з нами</h1>
            {/* Опис секції */}
            <p className="text-lg text-muted-foreground">
              Маєте питання, пропозиції або бажаєте долучитися до наших ініціатив? 
              Зв'яжемося з вами, і ми з радістю вам допоможемо.
            </p>
          </div>
        </div>
      </section>

      {/* Секція контактної інформації */}
      <section className="py-12">
        {/* Контейнер для контенту */}
        <div className="container px-4 mx-auto">
          {/* Сітка для карток контактної інформації */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Картка з email */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                {/* Іконка email */}
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

            {/* Картка з телефоном */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                {/* Іконка телефону */}
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

            {/* Картка з адресою */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                {/* Іконка адреси */}
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

      {/* Секція з вкладками (форма та калькулятор) */}
      <section className="py-12 bg-muted">
        {/* Контейнер для контенту */}
        <div className="container px-4 mx-auto">
          {/* Вкладки в центрі */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="contact-form">
              {/* Список вкладок */}
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact-form">Зворотній зв'язок</TabsTrigger>
                <TabsTrigger value="carbon-calculator">Калькулятор вуглецевого сліду</TabsTrigger>
              </TabsList>
              
              {/* Вміст вкладки форми */}
              <TabsContent value="contact-form">
                <Card>
                  <CardHeader>
                    <CardTitle>Надішліть нам повідомлення</CardTitle>
                    <CardDescription>
                      Заповніть форму нижче, і ми зв'яжемося з вами якнайшвидше.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Повідомлення про успішне відправлення */}
                    {formStatus === 'success' && (
                      <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                        <Leaf className="h-4 w-4" />
                        <AlertTitle>Дякуємо!</AlertTitle>
                        <AlertDescription>
                          Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {/* Повідомлення про помилку валідації */}
                    {formStatus === 'error' && (
                      <Alert variant="destructive" className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Помилка</AlertTitle>
                        <AlertDescription>
                          Будь ласка, заповніть усі поля коректно перед відправленням.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {/* Форма зворотного зв’язку */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Поле для імені */}
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
                          {formErrors.name && (
                            <p className="text-sm text-destructive">{formErrors.name}</p>
                          )}
                        </div>
                        
                        {/* Поле для email */}
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
                          {formErrors.email && (
                            <p className="text-sm text-destructive">{formErrors.email}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Поле для теми */}
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
                        {formErrors.subject && (
                          <p className="text-sm text-destructive">{formErrors.subject}</p>
                        )}
                      </div>
                      
                      {/* Поле для повідомлення */}
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
                        {formErrors.message && (
                          <p className="text-sm text-destructive">{formErrors.message}</p>
                        )}
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    {/* Кнопка відправлення форми */}
                    <Button type="submit" onClick={handleSubmit} className="w-full bg-eco hover:bg-eco-dark">
                      Надіслати повідомлення <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Вміст вкладки калькулятора */}
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
                      {/* Слайдер для транспорту */}
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
                      
                      {/* Слайдер для житла */}
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
                      
                      {/* Слайдер для харчування */}
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
                      
                      {/* Слайдер для товарів */}
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
                    
                    {/* Результат калькулятора */}
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
                    {/* Кнопка для розрахунку вуглецевого сліду */}
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

      {/* Секція соціальних мереж */}
      <section className="py-12">
        {/* Контейнер для контенту */}
        <div className="container px-4 mx-auto">
          {/* Текст і посилання в центрі */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Слідкуйте за нами</h2>
            <p className="text-muted-foreground mb-8">
              Приєднуйтесь до нашої спільноти в соціальних мережах, щоб бути в курсі останніх новин та подій.
            </p>
            
            {/* Посилання на соціальні мережі */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Facebook className="h-6 w-6 text-eco" />
              </a>
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Twitter className="h-6 w-6 text-eco" />
              </a>
              <a href="#" className="bg-eco/10 p-4 rounded-full hover:bg-eco/20 transition-colors">
                <Instagram className="h-6 w-6 text-eco" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Експорт компонента Contact для використання в App.tsx через маршрутизацію
export default Contact;