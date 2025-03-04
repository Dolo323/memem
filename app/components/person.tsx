import Image from "next/image";
import "../../styles/person.css";

interface PersonProps {
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string; // Путь к портрету
  bio: string;
}

const Person = ({ name, birthDate, deathDate, imageUrl, bio }: PersonProps) => {
  return (
    <div
      className="person-container"
      style={{
        backgroundImage: "url(/images/2.jpg)", // Фоновое изображение
        backgroundSize: "cover", // Масштабируем фон
        backgroundPosition: "center", // Центрируем фон
        padding: "20px", // Отступы для контента
      }}
    >
      <div className="person">
        {/* Портрет */}
        <Image
          src={`/images/${imageUrl}`} // Путь к портрету
          alt={name}
          width={150} // Увеличим размер портрета
          height={150}
          className="portrait"
        />
        {/* Информация о человеке */}
        <div className="info">
          <h2>{name}</h2>
          <p>
            {birthDate} - {deathDate}
          </p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
