
import { useState } from 'react';
import './dashboard.css';

const navigation = [
  { name: 'Overview', icon: '◈' },
  { name: 'Discover Movies', icon: '▣' },
  { name: 'Box Office', icon: '▤' },
  { name: 'AI Recommendations', icon: '✧' },
  { name: 'Theatres', icon: '▥' },
];

const movies = [
  {
    title: 'Movie Spotlight',
    language: 'TELUGU',
    genre: 'ACTION',
    rating: 'Featured',
    color: 'movie-red',
  },
  {
    title: 'Cinema Stories',
    language: 'KANNADA',
    genre: 'DRAMA',
    rating: 'Featured',
    color: 'movie-gold',
  },
  {
    title: 'Beyond Reality',
    language: 'TAMIL',
    genre: 'THRILLER',
    rating: 'Featured',
    color: 'movie-blue',
  },
  {
    title: 'Love & Life',
    language: 'MALAYALAM',
    genre: 'ROMANCE',
    rating: 'Featured',
    color: 'movie-purple',
  },
];

function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [search, setSearch] = useState('');

  const user = JSON.parse(
    sessionStorage.getItem('cinescope_user') || '{}'
  );

  function handleLogout() {
    sessionStorage.removeItem('cinescope_token');
    sessionStorage.removeItem('cinescope_user');
    window.location.href = '/login';
  }

  const filteredMovies = movies.filter((movie) =>
    `${movie.title} ${movie.language} ${movie.genre}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-brand">
          <span className="dashboard-logo">C</span>
          <span>CINESCOPE <strong>AI</strong></span>
        </div>

        <div className="sidebar-label">WORKSPACE</div>

        <nav className="dashboard-navigation">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={
                activeNav === item.name
                  ? 'nav-item active'
                  : 'nav-item'
              }
              onClick={() => setActiveNav(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">
              {(user.fullName || 'C').charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <strong>{user.fullName || 'Cinema Explorer'}</strong>
              <span>Member</span>
            </div>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            ↗ Sign out
          </button>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <span className="header-eyebrow">
              YOUR CINEMA INTELLIGENCE PLATFORM
            </span>
            <h1>{activeNav}</h1>
          </div>

          <div className="header-actions">
            <div className="header-status">
              <span className="status-dot" />
              INDIA EDITION
            </div>
            <div className="header-avatar">
              {(user.fullName || 'C').charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="dashboard-hero">
          <div className="hero-content">
            <span className="hero-tag">THE WORLD OF CINEMA, REIMAGINED</span>

            <h2>
              Discover stories.
              <br />
              Understand <span>cinema.</span>
            </h2>

            <p>
              Explore Indian movies, track box office performance
              and discover your next favourite film.
            </p>

            <button
              className="hero-button"
              onClick={() => setActiveNav('Discover Movies')}
            >
              Explore Movies <span>→</span>
            </button>
          </div>

          <div className="hero-decoration">
            <div className="hero-circle">
              <span>C</span>
            </div>
            <div className="hero-decoration-text">
              CINEMA IS AN EXPERIENCE
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="dashboard-search">
          <div className="search-heading">
            <div>
              <span className="section-eyebrow">EXPLORE THE INDUSTRY</span>
              <h2>Find your next movie</h2>
            </div>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search movies, languages or genres..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <span className="search-shortcut">SEARCH</span>
          </div>
        </section>

        {/* LANGUAGE FILTERS */}
        <section className="language-section">
          <span className="section-eyebrow">CINEMA ACROSS INDIA</span>

          <div className="language-list">
            {['ALL', 'KANNADA', 'TELUGU', 'TAMIL', 'MALAYALAM'].map(
              (language) => (
                <button
                  key={language}
                  onClick={() => setSearch(
                    language === 'ALL' ? '' : language
                  )}
                >
                  {language}
                </button>
              )
            )}
          </div>
        </section>

        {/* MOVIES */}
        <section className="movies-section">
          <div className="section-title-row">
            <div>
              <span className="section-eyebrow">HANDPICKED FOR EXPLORATION</span>
              <h2>Discover cinema</h2>
            </div>
            <span className="demo-label">DESIGN PREVIEW</span>
          </div>

          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <article className="movie-card" key={movie.title}>
                <div className={`movie-poster ${movie.color}`}>
                  <span className="poster-symbol">✦</span>
                  <span className="poster-genre">{movie.genre}</span>
                  <span className="poster-title">{movie.title}</span>
                  <span className="poster-language">{movie.language}</span>
                </div>

                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>{movie.language} · {movie.genre}</p>
                </div>
              </article>
            ))}

            {filteredMovies.length === 0 && (
              <p className="empty-results">
                No matching preview titles. Try another search.
              </p>
            )}
          </div>
        </section>

        {/* INTELLIGENCE MODULES */}
        <section className="intelligence-section">
          <span className="section-eyebrow">GO BEYOND MOVIE DISCOVERY</span>
          <h2>Explore CineScope intelligence</h2>

          <div className="intelligence-grid">

            <button
              className="intelligence-card"
              onClick={() => setActiveNav('Box Office')}
            >
              <span className="intelligence-icon">↗</span>
              <h3>Box Office Intelligence</h3>
              <p>Explore collections, budgets and commercial performance.</p>
              <span className="card-link">Explore <span>→</span></span>
            </button>

            <button
              className="intelligence-card"
              onClick={() => setActiveNav('AI Recommendations')}
            >
              <span className="intelligence-icon">✧</span>
              <h3>AI Movie Discovery</h3>
              <p>Find films based on your mood and preferences.</p>
              <span className="card-link">Discover <span>→</span></span>
            </button>

            <button
              className="intelligence-card"
              onClick={() => setActiveNav('Theatres')}
            >
              <span className="intelligence-icon">▤</span>
              <h3>Theatre Intelligence</h3>
              <p>Compare cinema experiences, screens and facilities.</p>
              <span className="card-link">Explore <span>→</span></span>
            </button>

          </div>
        </section>

        <footer className="dashboard-footer">
          <span>CINESCOPE AI</span>
          <span>DISCOVER BEYOND THE SCREEN · 2026</span>
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
