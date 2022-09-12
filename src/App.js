import Skill from './components/Skill';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <p>Age: 24</p>
        </div>
        <div className="center">
          <h1>EMANUEL</h1>
          <p>Profession: Web Developer</p>
        </div>
        <div className="right">
          <p>Country: HR</p>
        </div>
      </header>
      <nav className="navbar">
        <p>Go To:</p>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Skills:</h2>
        <section className="skills">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </section>
        <h2>Projects:</h2>
        <section className="projects" id="projects">
          <Project />
          <Project />
          <Project />
          <Project />
        </section>
        <section className="contact" id="contact">
          CONTACTS COMPONENT
        </section>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
