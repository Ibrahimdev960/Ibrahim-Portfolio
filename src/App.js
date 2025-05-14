import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import { Helmet } from "react-helmet"; // Import Helmet to manage head tag

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {/* Add Google Analytics tracking script */}
          <Helmet>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XYMNK5RV5G"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XYMNK5RV5G');
              `}
            </script>
          </Helmet>

          <Navbar />
          <Home />
          <Projects />
          <About />
          <ParallaxComponent />
          <Technologies />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
