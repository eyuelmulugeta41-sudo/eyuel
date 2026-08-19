import '../styel.css';

const skills = ['HTML5', 'CSS3', 'Git'];

function App() {
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

      <button type="button">Contact Me</button>
    </main>
  );
}

export default App;
