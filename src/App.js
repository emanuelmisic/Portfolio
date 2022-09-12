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
        <section className="skills">
          <h2>Skills:</h2>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </section>
        <section className="projects" id="projects">
          <h2>Projects:</h2>
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
