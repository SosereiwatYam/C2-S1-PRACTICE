export default function Lecturer({ lecturer }) {
  return (
    <li className="lecturer-item">
      <article className="lecturer-card">
        <h3>{lecturer.name}</h3>
        <small>{lecturer.subtitle}</small>
        <p>{lecturer.description}</p>
        <img src={lecturer.image.src} alt={lecturer.image.alt} />
      </article>
    </li>
  );
}