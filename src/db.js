// const db = {
//   "Шаурма": ["Куриная", "С Говядиной", "С Бараниной", "Со Свининой", "Без Мяса"].map(string => {
//       return {
//         name: "Шаурма " + string, 
//         price: Math.floor(Math.random() * 80) + 100,
//         img: "https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png",
//       }
//     })
//   ,
//   "Добавки": ["Сыр", "Чипсы", "Соус", "Грибы", "Халапенью"].map(string => {
//     return {
//       name: "Добавка: " + string,
//       price: 20,
//       img: "https://image.freepik.com/free-photo/cheese-isolated-on-white-background_88281-289.jpg",
//     }
//   }),
//   "Напитки и закуски": ["Pepsi 0.33", "Coca-Cola 0.33", "Сок Апельсиновый 0.33", "Чай чёрный 0.33", "Чай зеленый 0.33", "Flash 0.45", "Redbool 0.45"].map(string => {
//     return {
//       name: string, 
//       price: Math.floor(Math.random() * 80) + 40,
//       img: "https://static.pizzasushiwok.ru/images/menu_new/974-1300.jpg",
//     }
//   }),
//   "Супы": ["Куриный", "Говяжый", "Грибной", "Лапша", "С Фрикадельками"].map(string => {
//     return {
//       name: 'Суп ' + string, 
//       price: Math.floor(Math.random() * 160) + 120,
//       img: "https://image.freepik.com/free-photo/vegetable-soup-isolated-on-white-background_123827-13483.jpg"
//     }
//   }),
//   "Другое": null,
// }

// console.log(db);

const readydb = {
  'Шаурма': [
    {
      name: 'Шаурма Куриная',
      price: 129,
      img: 'https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png'
    },
    {
      name: 'Шаурма С Говядиной',
      price: 129,
      img: 'https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png'
    },
    {
      name: 'Шаурма С Бараниной',
      price: 124,
      img: 'https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png'
    },
    {
      name: 'Шаурма Со Свининой',
      price: 144,
      img: 'https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png'
    },
    {
      name: 'Шаурма Без Мяса',
      price: 150,
      img: 'https://arizona.pl.ua/image/catalog/shayrma/hotpng.com-3.png'
    }
  ],
  'Добавки': [
    {
      name: 'Добавка: Сыр',
      price: 20,
      img: 'https://i.pinimg.com/originals/2b/b1/39/2bb139db0f1c6de9e71728a0ee5c3f0b.png'
    },
    {
      name: 'Добавка: Чипсы',
      price: 20,
      img: 'https://i.pinimg.com/originals/2b/b1/39/2bb139db0f1c6de9e71728a0ee5c3f0b.png'
    },
    {
      name: 'Добавка: Соус',
      price: 20,
      img: 'https://i.pinimg.com/originals/2b/b1/39/2bb139db0f1c6de9e71728a0ee5c3f0b.png'
    },
    {
      name: 'Добавка: Грибы',
      price: 20,
      img: 'https://i.pinimg.com/originals/2b/b1/39/2bb139db0f1c6de9e71728a0ee5c3f0b.png'
    },
    {
      name: 'Добавка: Халапенью',
      price: 20,
      img: 'https://i.pinimg.com/originals/2b/b1/39/2bb139db0f1c6de9e71728a0ee5c3f0b.png'
    }
  ],
  'Напитки и закуски': [
    {
      name: 'Pepsi 0.33',
      price: 83,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Coca-Cola 0.33',
      price: 101,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Сок Апельсиновый 0.33',
      price: 64,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Чай чёрный 0.33',
      price: 108,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Чай зеленый 0.33',
      price: 96,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Flash 0.45',
      price: 41,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    },
    {
      name: 'Redbool 0.45',
      price: 99,
      img: 'http://pngimg.com/uploads/cocacola/cocacola_PNG4.png'
    }
  ],
  'Супы': [
    {
      name: 'Суп Куриный',
      price: 173,
      img: 'https://pngimg.com/uploads/soup/soup_PNG64.png'
    },
    {
      name: 'Суп Говяжый',
      price: 195,
      img: 'https://pngimg.com/uploads/soup/soup_PNG64.png'
    },
    {
      name: 'Суп Грибной',
      price: 277,
      img: 'https://pngimg.com/uploads/soup/soup_PNG64.png'
    },
    {
      name: 'Суп Лапша',
      price: 136,
      img: 'https://pngimg.com/uploads/soup/soup_PNG64.png'
    },
    {
      name: 'Суп С Фрикадельками',
      price: 132,
      img: 'https://pngimg.com/uploads/soup/soup_PNG64.png'
    }
  ],
  'Другое': []
}

export default readydb