import '../styel.css';
import { useState } from 'react';

const skills = ['HTML5', 'CSS3', 'Git'];
const phoneNumber = '0925318232';
const telegramUsername = 'DEMONTOPUP';

function App() {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <main className="eyu2">
      <img src="/profile.jpg" alt="Eyuel M profile" className="profile-img" />
      <h1>Eyuel M</h1>
      <p className="subtitle">Learning Web Development</p>

      <h2>About Me</h2>
      <p className="About">
        Hello! I am learning HTML and CSS. I<br />
        want to build web applications!
      </p>

      <h2>My Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowContactOptions((isVisible) => !isVisible)}
      >
        Contact Me
      </button>

      {showContactOptions && (
        <div className="contact-options">
          <a href={`tel:${phoneNumber}`}>Call Me</a>
          <a
            href={`https://t.me/${telegramUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      )}
    </main>
  );
}

export default App;
