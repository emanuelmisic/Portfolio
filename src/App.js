function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <p>Years old: 24</p>
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
        <section className="skills">SKILLS COMPONENT</section>
        <section className="projects" id="projects">
          PROJECTS COMPONENT
        </section>
        <section className="contact" id="contact">
          CONTACTS COMPONENT
        </section>
      </main>
    </div>
  );
}

export default App;
