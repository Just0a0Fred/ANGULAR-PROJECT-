# Отчет по проекту "Электронная очередь"
Автор: Николин Василий

# Прогресс:
1 неделя(22.02 - 01.03)/ Создание репозитория. Описание тех. задания, идеи и функционала проекта.

...to be continued

# 1. Цель проекта:
Цель: разработать универсальную, удобную систему электронной очереди.

# 2. План функционала системы: 
 1. Регистрация и авторизация.
 2. Страница "добавления" своей организации // Администратор.
 3. Страница "добавления" виртуальной очереди // Администратор.
 4. Отслеживание своей очереди // Администратор/Работник.
 5. Форма бронирования очереди // Клиент.
 6. Страница забронированных мест в очередях // Клиент.
 7. Страница поиска организаций // Клиент.

# 3. Подробное описание функционала системы:
## 3.1 Типы пользователей:
В данной "экосистеме" будут присутствовать 3 типа пользователей: 
 Клиент - человек, который хочет забронировать место в n-ой очереди.
 Администратор - человек, отвечающий за создание, отслеживание очереди n-организации.
 Работник - человек, имеющий доступ к отслеживанию очереди в свой "кабинет"(условно понятный пример).

## 3.2 Регистрация/Авторизация:
Регистрация имеет 3 вида:
 Регистрация клиента:
  ФИО
  Дата рождения
  Номер телефона
  Пароль
 Регисрация Администратора:
  ФИО
  Дата рождения
  Номер телефона
  Название организации, которую представляет администратор
  Пароль
 Регистрация Работника:
  ФИО
  Дата рождения
  Номер телефона
  Название организации, в которой он работает
  Рабочие дни и часы 
  Пароль
 Аунтификация сама определяет какой тип клиента входит на сайт.
 
 ## 3.3 Кратко про возможности:
 Администратор имеет возможность создать новую организацию на сайте, которая будет содержать внутри себя список очередей данной организации, для различных нужд. Также, он может добавлять людей, которые будут создавать очереди в свой "кабинет"(опять же условно).
 Работник может добавлять очередь внутри организации, в которой он работает.
 Клиент может бронировать очередь, отслеживать все завбронированные очереди.
 
 # Было бы здорово:
  Организовать рейтинговую систему пользователей//организаций, за то, что человек не пришел в назначенное время рейтинг понижается, за то что пришел вовремя повышается. У организацией же за задержку клиентов понижается рейтинг, а за четкую работу по времени повышается. Так можно было бы предоставить пользователю возможность отслеживать релевантность организации.
  Ввести оплату данной услуги, огранизации платят n-ую сумму, а пользователи просто подписываются на сервис.
  Возможность перехода с одного типа пользователя на другого. Будет удобно для администратора и работника, который тоже может нуждаться в бронировании очереди.
 
 #  Предполагаемый стек технологий:
  Фронтенд:
    Angular
    Typescript
    HTML
    SCSS 
