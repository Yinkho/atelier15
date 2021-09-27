import React, { useEffect, ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Professionals from './pages/Professionals';
import Atelier15 from './pages/Atelier15';
import Home from './pages/Home';
import Techniques from './pages/Techniques';
import MentionsLegales from './pages/MentionsLegales';
import styles from './styles.module.scss';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <div className={styles.pages}>
          <Switch>
            <Route
              path="/professionnels/:professional"
              component={Professionals}
            />
            <Route path="/atelier15" component={Atelier15} />
            <Route path="/techniques/:technique" component={Techniques} />
            <Route path="/mentions-legales" component={MentionsLegales} />
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
        <p className={styles['legal-text']}>
          Nos techniques ne se substituent pas à la médecine
          conventionnellement.
          <br />
          Nos praticiens ne peuvent pas faire un diagnostic, modifier un
          traitement ou participer à une décision thérapeutique.
          <br />
          Conformément à la loi, nos pratiques ne peuvent être en aucun cas
          assimilée à des soins médicaux ou de kinésithérapie, mais à une
          technique de bien-être par la relaxation physique et la détente
          libératrice de stress.
          <br />
          (Loi du 30.04.1946, décret 60669 de l'article l.489 et de l'arrêté du
          8.10.1996)
        </p>
        <Footer />
      </Router>
    </div>
  );
}

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
