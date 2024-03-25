import logo from './logo.svg';
import './App.css';
import CardList from './Component/CardList';
import Card from './Component/Card';

function App() {
  return(
    <div>
    <header class="header">
  <nav class="header__links header__links--left">
    <a>Home</a> | <a>About</a> |
    <a>Contact</a>
  </nav>
  <div className="header__logo">Logo</div>
  <div className="header__links header__links--right">
    <input className="search" placeholder="Search..." />
    <p className="last-pressed"></p>
  </div>
</header>
<section class="hero">
      <div>
        <h2 className="hero__title">Hero Title</h2>
        <h3 className="hero__tagline">Tag Line</h3>
      </div>
    </section>

    <CardList />
</div>
);
}

export default App;
