const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/spa-javascript-vanilla/#">
            <img class="rickandmorty-logo" src="../../public/images/rickandmorty-logo.png">
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <!--<a href="#/about/">
          About
        </a>-->
        <a target="_blank" href="https://github.com/diegocaminor/spa-javascript-vanilla">
          <img class="social-icon" src="../../public/images/github-icon.svg" alt="GitHub">
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/diegocaminor/">
          <img class="social-icon" src="../../public/images/linkedin-icon.svg" alt="LinkIn">
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
