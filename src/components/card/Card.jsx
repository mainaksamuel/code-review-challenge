import "./card.css";

export const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={`${user.avatar}`} alt="Avatar" />
      <div className="container">
        <h4>{user.name}</h4>
        <p>{user.title}</p>
        <p>Seniority level: {user.seniority}</p>
        <p>Hourly rate: {user.hourlyRate}</p>
        <p>Languages:</p>

        {user.tags.map((tag) => (
          <span className="tag" key={`${user.id}-${tag}`}>
            {tag}
          </span>
        ))}

        <footer>
          <button className="primary-button">Book Now</button>
          <button className="secondary-button">Full profile</button>
        </footer>
      </div>
    </div>
  );
};
