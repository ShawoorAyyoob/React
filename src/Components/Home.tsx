import { Link } from "react-router-dom";

function Home() {
  return (
    <main
      style={{
        paddingTop: "80px",
        background: "linear-gradient(135deg, #ffffff 60%, #e0e7ef 100%)",
        minHeight: "100vh",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
        style={{
          background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
          borderBottomLeftRadius: "0.75rem",
          borderBottomRightRadius: "0.75rem",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            style={{
              letterSpacing: "2px",
              fontSize: "1.7rem",
              color: "#fff",
              textShadow: "0 2px 8px #3f5efb",
            }}>
            Nexa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/toggleSwitch">
                  ToggleSwitch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/postList">
                  Post List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/posts-search">
                  Post Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/products-search">
                  Product Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/recipe-search">
                  Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-glow" to="/carlist">
                  Cars
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container mt-5">
        <div
          className="p-5 rounded-4 shadow-lg text-center animate__animated animate__fadeIn"
          style={{
            background:
              "linear-gradient(120deg, #ffffff 60%, #e0e7ef 100%)",
            color: "#232526",
            border: "1px solid #e0e7ef",
            boxShadow: "0 8px 32px 0 rgba(63,95,251,0.10)",
            backdropFilter: "blur(4px)",
          }}
        >
          <h1
            className="display-4 fw-bold mb-3"
            style={{
              color: "#3f5efb",
              letterSpacing: "1px",
              textShadow: "0 2px 8px #e0e7ef",
            }}
          >
            Welcome to <span style={{ color: "#fc466b" }}>Nexa</span>!
          </h1>
          <p className="lead mb-4" style={{ color: "#4b5563" }}>
            A modern and intuitive web application built with{" "}
            <span className="fw-semibold" style={{ color: "#fc466b" }}>
              React
            </span>{" "}
            to simplify your journey in personal finance tracking, task
            management, or learning Java.
          </p>
          <ul className="list-unstyled mb-4">
            <li className="mb-2">
              <i className="bi bi-lightning-charge text-warning me-2"></i>{" "}
              <span className="fw-semibold" style={{ color: "#fc466b" }}>
                Real-time updates
              </span>{" "}
              for instant feedback
            </li>
            <li className="mb-2">
              <i className="bi bi-phone text-info me-2"></i>{" "}
              <span className="fw-semibold" style={{ color: "#3f5efb" }}>
                Responsive design
              </span>{" "}
              for all devices
            </li>
            <li className="mb-2">
              <i className="bi bi-shield-lock text-success me-2"></i>{" "}
              <span className="fw-semibold" style={{ color: "#10b981" }}>
                Secure & fast
              </span>{" "}
              experience
            </li>
            <li className="mb-2">
              <i className="bi bi-ui-checks-grid text-danger me-2"></i>{" "}
              <span className="fw-semibold" style={{ color: "#f43f5e" }}>
                Clean interface
              </span>{" "}
              and powerful features
            </li>
          </ul>
          <p className="mb-4" style={{ color: "#374151" }}>
            Whether you're a beginner or a seasoned user, you'll love the
            seamless interaction and robust tech stack. Developed by{" "}
            <span className="fw-bold" style={{ color: "#fc466b" }}>
              Shawoor
            </span>
            , this project reflects our commitment to{" "}
            <span style={{ color: "#3f5efb" }}>innovation</span> and{" "}
            <span style={{ color: "#10b981" }}>continuous improvement</span>.
          </p>
          <div
            className="alert mx-auto w-75"
            style={{
              background: "rgba(63,95,251,0.07)",
              color: "#3f5efb",
              border: "1px solid #3f5efb",
              fontWeight: 600,
              boxShadow: "0 2px 8px #3f5efb22",
            }}
          >
            <i className="bi bi-chat-dots me-2"></i>
            We value your feedback! Share your ideas and help us grow together.
          </div>
        </div>
      </section>
      <footer className="footer-nexa">
        <span>
          © {new Date().getFullYear()} Nexa. Crafted with <i className="bi bi-heart-fill text-danger"></i> by{" "}
          <a href="https://github.com/ShawoorAyyoob" target="_blank" rel="noopener noreferrer">Shawoor</a>
          . All rights reserved.
        </span>
      </footer>
      <style>
        {`
          .animate__animated.animate__fadeIn {
            animation: fadeIn 1.2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .nav-link-glow {
            color: #fff !important;
            position: relative;
            transition: color 0.2s;
          }
          .nav-link-glow:hover, .nav-link-glow.active {
            color: #ffd700 !important;
            text-shadow: 0 0 8px #fc466b, 0 0 16px #3f5efb;
          }
            .animate__animated.animate__fadeIn {
            animation: fadeIn 1.2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .nav-link-glow {
            color: #fff !important;
            position: relative;
            transition: color 0.2s;
          }
          .nav-link-glow:hover, .nav-link-glow.active {
            color: #ffd700 !important;
            text-shadow: 0 0 8px #fc466b, 0 0 16px #3f5efb;
          }
            .footer-nexa {
            background: linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
            color: #fff;
            padding: 1.2rem 0 1rem 0;
            text-align: center;
            font-size: 1.08rem;
            letter-spacing: 0.5px;
            border-top-left-radius: 0.75rem;
            border-top-right-radius: 0.75rem;
            margin-top: 48px;
            box-shadow: 0 -2px 16px 0 rgba(63,95,251,0.08);
          }
          .footer-nexa a {
            color: #ffd700;
            text-decoration: underline;
            margin: 0 0.25rem;
            font-weight: 500;
            transition: color 0.2s;
          }
          .footer-nexa a:hover {
            color: #fffbe7;
          }
        `}
      </style>
    </main>
  );
}
export default Home;