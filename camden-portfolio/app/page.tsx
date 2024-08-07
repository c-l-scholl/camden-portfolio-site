

const Home = () => {
  return (
    <div>
      <nav id="desktop-nav" className="flex justify-around items-center h-40">
        <div className="text-4xl cursor-default">Camden Scholl</div>
        <div>
          <ul className="flex flex-row gap-8 list-none text-2xl">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Home;
