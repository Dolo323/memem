import Image from "next/image";
import mountains from "../public/mountains.jpg";
import Header from "./components/header";
import Person from "./components/person";

const people = [
  {
    name: "Соколова Екатерина Алексеевна",
    birthDate: "27.11.1920",
    deathDate: "22.02.2016",
    imageUrl: "Sokolova.png",
    bio: "В марте 1944года была назначена на должность помощника дежурного по отделению Северной железной дороги в городе Вологде. На этой должности работала до конца войны. В её обязанности входило обеспечивать бесперебойную поставку оружия, боеприпасов, военной техники, продовольствия из тыла в самое пекло сражений, вывозить раненых в госпитали и поддерживать бесперебойную работу сети железных дорог.",
  },
  {
    name: "Чернявский Пётр Иосифович",
    birthDate: "13.03.",
    deathDate: "",
    imageUrl: "Chernyavski.png",
    bio: "На фронт ушел в июле 1944 г. Воевал стрелком в 89 стрелковом полку, 65 стрелковой дивизии, 3 Белорусского фронта 65 Армии. Был тяжело ранен по Кениксбергом.Имеет несколько наград.В том числе медаль ЗА БОЕВЫЕ ЗАСЛУГИ:Демобилизовался 25 августа 1945 года.",
  },
  {
    name: "Шитов Петр Иванович",
    birthDate: "1907",
    deathDate: "08.25.1945",
    imageUrl: "Shitov.png",
    bio: "На фронт ушел в июле 1944 г. Воевал стрелком в 89 стрелковом полку, 65 стрелковой дивизии, 3 Белорусского фронта 65 Армии. Был тяжело ранен по Кениксбергом.Имеет несколько наград.В том числе медаль ЗА БОЕВЫЕ ЗАСЛУГИ:Демобилизовался 25 августа 1945 года.",
  },
  {
    name: "Соколов Виктор Алексеевич",
    birthDate: "22.06.1925",
    deathDate: "1998",
    imageUrl: "Sokolov.png",
    bio: "Участник Великой Отечественной войны и войны с Японией",
  },
];

function Background() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {people.map((person, index) => (
              <div key={index} className="w-full">
                <Person
                  name={person.name}
                  birthDate={person.birthDate}
                  deathDate={person.deathDate}
                  imageUrl={person.imageUrl}
                  bio={person.bio}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}