import Image from "next/image";
import "../../styles/person.css";

interface PersonProps {
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string;
  bio: string;
}

const Person = ({ name, birthDate, deathDate, imageUrl, bio }: PersonProps) => {
  return (
    <div className="person-container">
      <div className="person">
        <div className="portrait-container">
          <Image
            src={`/images/${imageUrl}`}
            alt={name}
            width={150}
            height={150}
            className="portrait"
          />
        </div>
        <div className="info">
          <h2 className="name">{name}</h2>
          <p className="dates">
            {birthDate} - {deathDate || "настоящее время"}
          </p>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
