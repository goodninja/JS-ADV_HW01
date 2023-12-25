/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  { title: "Holly Molly Royal Glory", artist: "The King of Kings", year: 1969 },
  {
    title: "Eating flesh for the sake of trash",
    artist: "Undead without head",
    year: 1999,
  },
  { title: "The Road from Emmet to Snippet", artist: "11001100", year: 2007 },
];

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const el of albums) {
      yield el;
    }
  },
};

for (const el of albums) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}
