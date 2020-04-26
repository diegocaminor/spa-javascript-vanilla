import rickandmortyImg from "../../public/images/rickandmorty-logo.png";
import githubImg from "../../public/images/github-icon.svg";
import linkedinImg from "../../public/images/linkedin-icon.svg";

const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/spa-javascript-vanilla/#">
            <img class="rickandmorty-logo" src="${rickandmortyImg}" alt="Rick&Morty">
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <!--<a href="#/about/">
          About
        </a>-->
        <a target="_blank" href="https://github.com/diegocaminor/spa-javascript-vanilla">
          <img class="social-icon" src="${githubImg}" alt="GitHub">
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/diegocaminor/">
          <img class="social-icon" src="${linkedinImg}" alt="LinkedIn">
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
