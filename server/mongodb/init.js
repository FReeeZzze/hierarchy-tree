db.createCollection("cities");
db.cities.insertMany([
  {
    _id: ObjectId("61a89f9718e4cf123e778d27"),
    name: "Москва",
    data: "10000000",
  },
  {
    _id: ObjectId("61a89fa118e4cf123e778d2c"),
    name: "Воронеж",
    data: "1000000",
  },
  {
    _id: ObjectId("61a89fac18e4cf123e778d31"),
    name: "Санкт-Петербург",
    data: "3000000",
  },
]);

db.createCollection("groups");
db.groups.insertMany([
  {
    _id: ObjectId("61a8a36b18e4cf123e778f17"),
    type: "city",
    name: "Москва г.",
  },
  {
    _id: ObjectId("61a8a3cc18e4cf123e778f53"),
    type: "district",
    name: "Пресненский р-н",
  },
  {
    _id: ObjectId("61a8a3e218e4cf123e778f5f"),
    type: "street",
    name: "Гашека ул.",
  },
  {
    _id: ObjectId("61a8aa6118e4cf123e7792f9"),
    type: "street",
    name: "Рочдельская ул.",
  },
  {
    _id: ObjectId("61a8aa9818e4cf123e779310"),
    type: "district",
    name: "Коптево р-н",
  },
  {
    _id: ObjectId("61a8aab218e4cf123e779322"),
    type: "street",
    name: "Нарвская ул.",
  },
  {
    _id: ObjectId("61a8aac318e4cf123e77932b"),
    type: "street",
    name: "Коптевская ул.",
  },
  {
    _id: ObjectId("61a8aad618e4cf123e779338"),
    type: "district",
    name: "Отрадное р-н",
  },
  {
    _id: ObjectId("61a8aadc18e4cf123e77933f"),
    type: "street",
    name: "Сигнальный проезд",
  },
  {
    _id: ObjectId("61a8aae718e4cf123e779349"),
    type: "street",
    name: "Отрадная ул.",
  },
  {
    _id: ObjectId("61a8aaf118e4cf123e77934e"),
    type: "city",
    name: "Воронеж г.",
  },
  {
    _id: ObjectId("61a8aafa18e4cf123e779355"),
    type: "district",
    name: "Советский р-н",
  },
  {
    _id: ObjectId("61a8ab0318e4cf123e77935c"),
    type: "street",
    name: "Патриотов пр-т",
  },
  {
    _id: ObjectId("61a8ab1018e4cf123e779367"),
    type: "street",
    name: "Кривошеина ул.",
  },
  {
    _id: ObjectId("61a8ab1918e4cf123e77936e"),
    type: "district",
    name: "Центральный р-н",
  },
  {
    _id: ObjectId("61a8ab1f18e4cf123e779373"),
    type: "street",
    name: "Ленина ул.",
  },
  {
    _id: ObjectId("61a8ab2818e4cf123e779378"),
    type: "street",
    name: "Рабочий пр-т",
  },
  {
    _id: ObjectId("61a8ab3318e4cf123e77937f"),
    type: "city",
    name: "Санкт-Петербург г.",
  },
  {
    _id: ObjectId("61a8ab3a18e4cf123e779383"),
    type: "district",
    name: "Выборгский р-н",
  },
  {
    _id: ObjectId("61a8ab4118e4cf123e77938d"),
    type: "street",
    name: "Светлановский пр-т",
  },
  {
    _id: ObjectId("61a8ae8618e4cf123e779515"),
    type: "street",
    name: "Орбели ул.",
  },
  {
    _id: ObjectId("61a8ae9118e4cf123e77951c"),
    type: "district",
    name: "Фрунзенский р-н",
  },
  {
    _id: ObjectId("61a8ae9918e4cf123e779521"),
    type: "street",
    name: "Лиговский пр-т",
  },
  {
    _id: ObjectId("61a8aea618e4cf123e779528"),
    type: "street",
    name: "Воронежская ул.",
  },
]);

db.createCollection("citizens");
db.citizens.insertMany([
  {
    _id: ObjectId("61a8a55018e4cf123e779010"),
    name: "Анна",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8abc018e4cf123e7793e4"),
    name: "Степан",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8aa6118e4cf123e7792f9"),
    ],
  },

  {
    _id: ObjectId("61a8ac3418e4cf123e779421"),
    name: "Виктор",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8ac8318e4cf123e779445"),
    name: "Алексей",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aac318e4cf123e77932b"),
    ],
  },

  {
    _id: ObjectId("61a8acc018e4cf123e779458"),
    name: "Ярослав",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aad618e4cf123e779338"),
      ObjectId("61a8aadc18e4cf123e77933f"),
    ],
  },

  {
    _id: ObjectId("61a8acdc18e4cf123e779461"),
    name: "Антонина",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aad618e4cf123e779338"),
      ObjectId("61a8aae718e4cf123e779349"),
    ],
  },

  {
    _id: ObjectId("61a8ad3f18e4cf123e779487"),
    name: "Григорий",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8aafa18e4cf123e779355"),
      ObjectId("61a8ab0318e4cf123e77935c"),
    ],
  },

  {
    _id: ObjectId("61a8ad6918e4cf123e779494"),
    name: "Александр",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8aafa18e4cf123e779355"),
      ObjectId("61a8ab1018e4cf123e779367"),
    ],
  },

  {
    _id: ObjectId("61a8ad8b18e4cf123e7794a1"),
    name: "Владимир",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab1f18e4cf123e779373"),
    ],
  },

  {
    _id: ObjectId("61a8adc618e4cf123e7794bd"),
    name: "Василий",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8ae3118e4cf123e7794ed"),
    name: "Яков",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ab4118e4cf123e77938d"),
    ],
  },

  {
    _id: ObjectId("61a8b2d218e4cf123e7796b1"),
    name: "Виктория",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8b30518e4cf123e7796c4"),
    name: "Николай",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8ae9918e4cf123e779521"),
    ],
  },

  {
    _id: ObjectId("61a8b32218e4cf123e7796d6"),
    name: "Валентин",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8aea618e4cf123e779528"),
    ],
  },

  {
    _id: ObjectId("61a8b35818e4cf123e7796e9"),
    name: "Михаил",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8d3ce18e4cf123e77a120"),
    name: "Арсений",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8d3f118e4cf123e77a131"),
    name: "Варвара",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8aa6118e4cf123e7792f9"),
    ],
  },

  {
    _id: ObjectId("61a8d42018e4cf123e77a141"),
    name: "Вячеслав",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aad618e4cf123e779338"),
      ObjectId("61a8aadc18e4cf123e77933f"),
    ],
  },

  {
    _id: ObjectId("61a8d43118e4cf123e77a149"),
    name: "Владислав",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aad618e4cf123e779338"),
      ObjectId("61a8aadc18e4cf123e77933f"),
    ],
  },

  {
    _id: ObjectId("61a8d4b618e4cf123e77a176"),
    name: "Светлана",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ab4118e4cf123e77938d"),
    ],
  },

  {
    _id: ObjectId("61a8d4d918e4cf123e77a181"),
    name: "Константин",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8d4ed18e4cf123e77a18c"),
    name: "Мирослава",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8d51518e4cf123e77a19d"),
    name: "Семен",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8ae9918e4cf123e779521"),
    ],
  },

  {
    _id: ObjectId("61a8d52718e4cf123e77a1a8"),
    name: "Ульяна",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8ae9918e4cf123e779521"),
    ],
  },

  {
    _id: ObjectId("61a8d53518e4cf123e77a1af"),
    name: "Влада",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8ae9918e4cf123e779521"),
    ],
  },

  {
    _id: ObjectId("61a8d55618e4cf123e77a1bc"),
    name: "Наталья",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8aea618e4cf123e779528"),
    ],
  },

  {
    _id: ObjectId("61a8d56518e4cf123e77a1c3"),
    name: "Ирина",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8aea618e4cf123e779528"),
    ],
  },

  {
    _id: ObjectId("61a8d57218e4cf123e77a1ca"),
    name: "Кира",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8aea618e4cf123e779528"),
    ],
  },

  {
    _id: ObjectId("61a8d5a718e4cf123e77a1dd"),
    name: "Роман",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8d5b618e4cf123e77a1e4"),
    name: "Иван",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8d5f418e4cf123e77a1f9"),
    name: "Антон",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8aafa18e4cf123e779355"),
      ObjectId("61a8ab0318e4cf123e77935c"),
    ],
  },

  {
    _id: ObjectId("61a8d60118e4cf123e77a200"),
    name: "Томара",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8aafa18e4cf123e779355"),
      ObjectId("61a8ab0318e4cf123e77935c"),
    ],
  },

  {
    _id: ObjectId("61a8d62718e4cf123e77a210"),
    name: "Юлия",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8d63818e4cf123e77a216"),
    name: "Петр",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8d64318e4cf123e77a21f"),
    name: "Елена",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8d65018e4cf123e77a229"),
    name: "Валентина",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8d65d18e4cf123e77a231"),
    name: "Татьяна",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8ab1918e4cf123e77936e"),
      ObjectId("61a8ab2818e4cf123e779378"),
    ],
  },

  {
    _id: ObjectId("61a8d69a18e4cf123e77a246"),
    name: "Ян",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8d6a718e4cf123e77a24b"),
    name: "Ольга",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8d6b218e4cf123e77a250"),
    name: "Анатолий",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ab3a18e4cf123e779383"),
      ObjectId("61a8ae8618e4cf123e779515"),
    ],
  },

  {
    _id: ObjectId("61a8d6dc18e4cf123e77a262"),
    name: "Степан",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8d6e618e4cf123e77a267"),
    name: "Павел",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8d6fb18e4cf123e77a271"),
    name: "Григорий",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8a3cc18e4cf123e778f53"),
      ObjectId("61a8a3e218e4cf123e778f5f"),
    ],
  },

  {
    _id: ObjectId("61a8d71e18e4cf123e77a27e"),
    name: "Валерий",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aad618e4cf123e779338"),
      ObjectId("61a8aadc18e4cf123e77933f"),
    ],
  },

  {
    _id: ObjectId("61a8d74018e4cf123e77a28d"),
    name: "Леонид",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8d75018e4cf123e77a294"),
    name: "Тимофей",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8d75c18e4cf123e77a299"),
    name: "Олег",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aab218e4cf123e779322"),
    ],
  },

  {
    _id: ObjectId("61a8d79e18e4cf123e77a2b4"),
    name: "Олег",
    city_id: ObjectId("61a89fac18e4cf123e778d31"),
    groups: [
      ObjectId("61a8ab3318e4cf123e77937f"),
      ObjectId("61a8ae9118e4cf123e77951c"),
      ObjectId("61a8ae9918e4cf123e779521"),
    ],
  },

  {
    _id: ObjectId("61a8d7e818e4cf123e77a2cb"),
    name: "Дмитрий",
    city_id: ObjectId("61a89fa118e4cf123e778d2c"),
    groups: [
      ObjectId("61a8aaf118e4cf123e77934e"),
      ObjectId("61a8aafa18e4cf123e779355"),
      ObjectId("61a8ab1018e4cf123e779367"),
    ],
  },

  {
    _id: ObjectId("61a8d81218e4cf123e77a2dd"),
    name: "Жан",
    city_id: ObjectId("61a89f9718e4cf123e778d27"),
    groups: [
      ObjectId("61a8a36b18e4cf123e778f17"),
      ObjectId("61a8aa9818e4cf123e779310"),
      ObjectId("61a8aac318e4cf123e77932b"),
    ],
  },
]);
