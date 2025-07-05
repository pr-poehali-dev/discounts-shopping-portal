import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stores = [
    { name: "Ozon", logo: "🛍️", deals: 1250, rating: 4.8 },
    { name: "Wildberries", logo: "🛒", deals: 890, rating: 4.7 },
    { name: "Яндекс.Маркет", logo: "📦", deals: 2100, rating: 4.9 },
    { name: "Avito", logo: "🏪", deals: 750, rating: 4.6 },
    { name: "DNS", logo: "💻", deals: 430, rating: 4.5 },
    { name: "М.Видео", logo: "📱", deals: 680, rating: 4.7 },
  ];

  const hotDeals = [
    {
      title: "iPhone 15 Pro Max",
      oldPrice: 120000,
      newPrice: 89990,
      discount: 25,
      store: "Ozon",
      image: "📱",
    },
    {
      title: "MacBook Air M2",
      oldPrice: 99000,
      newPrice: 79990,
      discount: 19,
      store: "DNS",
      image: "💻",
    },
    {
      title: "Samsung Galaxy S24",
      oldPrice: 85000,
      newPrice: 69990,
      discount: 18,
      store: "М.Видео",
      image: "📱",
    },
    {
      title: "AirPods Pro 2",
      oldPrice: 25000,
      newPrice: 19990,
      discount: 20,
      store: "Wildberries",
      image: "🎧",
    },
  ];

  const categories = [
    { name: "Электроника", icon: "📱", count: 12000 },
    { name: "Одежда", icon: "👕", count: 8500 },
    { name: "Дом и сад", icon: "🏡", count: 6200 },
    { name: "Красота", icon: "💄", count: 4800 },
    { name: "Спорт", icon: "⚽", count: 3200 },
    { name: "Авто", icon: "🚗", count: 2100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                СкидкиМарт
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800"
              >
                -70% 🔥
              </Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Все магазины
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Топ скидки
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Лучшее
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Сравнение
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Heart" size={16} />
                Избранное
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Найди лучшие скидки
            <br />
            <span className="text-yellow-300">из всех магазинов</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Сравнивай цены, находи супер-предложения и экономь до 70% на
            покупках
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск товаров, брендов, магазинов..."
                  className="pl-10 h-12 text-gray-900 bg-white"
                />
              </div>
              <Button className="h-12 px-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                Найти
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              📱 Телефоны
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              💻 Ноутбуки
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              👕 Одежда
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              🏡 Для дома
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎮 Игры</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-600">150K+</div>
              <div className="text-gray-600">Товаров</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Магазинов</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600">70%</div>
              <div className="text-gray-600">Макс. скидка</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600">Обновления</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Hot Deals Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              🔥 Горячие предложения
            </h2>
            <Button
              variant="outline"
              className="hover:bg-orange-50 hover:border-orange-300"
            >
              Все предложения
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((deal, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      -{deal.discount}%
                    </Badge>
                    <Icon
                      name="Heart"
                      size={20}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                    />
                  </div>
                  <div className="text-4xl mb-2">{deal.image}</div>
                  <CardTitle className="text-lg">{deal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">
                        ₽{deal.oldPrice.toLocaleString()}
                      </span>
                      <span className="text-xl font-bold text-green-600">
                        ₽{deal.newPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{deal.store}</div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer text-center p-4"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-gray-900">
                  {category.name}
                </div>
                <div className="text-sm text-gray-600">
                  {category.count.toLocaleString()} товаров
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stores Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              🏪 Все магазины
            </h2>
            <Button
              variant="outline"
              className="hover:bg-blue-50 hover:border-blue-300"
            >
              Все магазины
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{store.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{store.name}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Icon
                            name="Star"
                            size={14}
                            className="text-yellow-500"
                          />
                          {store.rating}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {store.deals} скидок
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Смотреть предложения
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Price Comparison Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">📊 Сравнение цен</h2>
                <p className="text-lg opacity-90">
                  Найди самую выгодную цену за секунды
                </p>
              </div>
              <div className="text-6xl opacity-20">📈</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Введите название товара..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                    Найти
                  </Button>
                </div>
                <div className="text-sm opacity-80">
                  Популярные запросы: iPhone, Samsung, MacBook, AirPods
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span>iPhone 15 Pro</span>
                    <span className="font-bold">от ₽89,990</span>
                  </div>
                  <div className="text-sm opacity-80">
                    Найдено в 12 магазинах
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span>MacBook Air M2</span>
                    <span className="font-bold">от ₽79,990</span>
                  </div>
                  <div className="text-sm opacity-80">
                    Найдено в 8 магазинах
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎯 Не пропусти лучшие скидки!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Подпишись на уведомления и получай информацию о новых скидках
                первым
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Твой email..."
                  className="flex-1"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Подписаться
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Никакого спама, только лучшие предложения
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            СкидкиМарт
          </div>
          <p className="text-gray-400 mb-4">
            Лучшие скидки из всех магазинов в одном месте
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="hover:text-orange-400">
              О нас
            </a>
            <a href="#" className="hover:text-orange-400">
              Контакты
            </a>
            <a href="#" className="hover:text-orange-400">
              Помощь
            </a>
            <a href="#" className="hover:text-orange-400">
              API
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
