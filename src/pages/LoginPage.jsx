
import { useState } from 'react';
import '../styles/login.css';

const cinemaSlides = [
  {
    genre: 'ACTION',
    title: 'Stories of courage.',
    description: 'Discover larger-than-life cinema.',
    visual: 'action',
  },
  {
    genre: 'ROMANCE & DRAMA',
    title: 'Stories that stay.',
    description: 'Find films that move you.',
    visual: 'romance',
  },
  {
    genre: 'THRILLER',
    title: 'Stories beyond reality.',
    description: 'Explore the unexpected.',
    visual: 'thriller',
  },
];

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const slide = cinemaSlides[activeSlide];

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }

    alert('Login UI is ready. Backend authentication is coming next!');
  }

  return (
    <main className="login-page">

      {/* LEFT: CINEMATIC EXPERIENCE */}
      <section className="cinema-panel">

        <header className="brand">
          <span className="brand-symbol">C</span>
          <span>CINESCOPE <strong>AI</strong></span>
        </header>

        <div className="hero-copy">
          <span className="eyebrow">YOUR CINEMA. YOUR WORLD.</span>

          <h1>
            Every film has
            <br />
            a <span>story.</span>
            <br />
            Find yours.
          </h1>

          <p>
            Discover films, explore box office intelligence
            and find your next unforgettable movie.
          </p>
        </div>

        {/* ABSTRACT FILM REEL */}
        <div className="film-art" aria-hidden="true">
          <div className="film-reel">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="film-beam" />
          <div className="film-strip">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* INDIAN CINEMA GENRE COLLAGE */}
        <div className="genre-collage">
          <div className={`genre-card genre-${slide.visual}`}>
            <span className="genre-number">0{activeSlide + 1}</span>
            <span className="genre-name">{slide.genre}</span>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>

          <div className="genre-thumbnails">
            <div className="mini-poster poster-action">
              <span>ACTION</span>
            </div>
            <div className="mini-poster poster-drama">
              <span>DRAMA</span>
            </div>
            <div className="mini-poster poster-thriller">
              <span>THRILLER</span>
            </div>
          </div>

          <div className="slide-controls">
            {cinemaSlides.map((item, index) => (
              <button
                key={item.genre}
                type="button"
                aria-label={`Show ${item.genre}`}
                className={activeSlide === index ? 'active' : ''}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* THEATRE ATMOSPHERE */}
        <div className="theatre-seats" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <footer className="cinema-footer">
          <span>DISCOVER BEYOND THE SCREEN</span>
          <span>INDIA · WORLDWIDE</span>
        </footer>

      </section>

      {/* RIGHT: LOGIN FORM */}
      <section className="login-panel">

        <div className="login-card">

          <div className="mobile-brand">
            CINESCOPE <strong>AI</strong>
          </div>

          <span className="login-eyebrow">WELCOME BACK</span>

          <h2>Sign in</h2>

          <p className="login-description">
            Your next cinematic experience starts here.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-heading">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password">Forgot password?</a>
              </div>

              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <label className="remember-option">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="sign-in-button">
              Sign in <span>→</span>
            </button>

          </form>

          <div className="login-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <button type="button" className="google-button">
            <span className="google-letter">G</span>
            Continue with Google
          </button>

          <p className="signup-text">
            New to CineScope? <a href="#signup">Create an account</a>
          </p>

        </div>

        <div className="login-bottom">
          © 2026 CineScope AI. All rights reserved.
        </div>

      </section>

    </main>
  );
}

export default LoginPage;
