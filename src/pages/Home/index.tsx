import React, { ReactElement, useRef } from 'react';
import banner from '../../assets/banner.jpg';

import Button from '../../components/Button';
import Divider from '../../components/Divider';
import ExpertiseCard from '../../components/ExpertiseCard';
import ContactCard from '../../components/ContactCard';
import SectionTitle from '../../components/SectionTitle';

import reflexologieCard from '../../assets/reflexologie-card.jpg';
import detenteCard from '../../assets/detente-card.jpg';
import jmvCard from '../../assets/jmv-card.jpg';
import harmonisationCard from '../../assets/harmonisation-card.jpg';
import place1 from '../../assets/place1.jpg';
import place2 from '../../assets/place2.jpg';
import place3 from '../../assets/place3.jpg';
import place4 from '../../assets/place4.jpg';
import sample5 from '../../assets/sample5.jpg';
import styles from './styles.module.scss';

const Home = (): ReactElement => {
  const professionalsRef = useRef();

  return (
    <div className={styles.page}>
      <section className={styles.banner}>
        <span className={styles.border} />
        <h1>
          Retrouvez votre équilibre
          <br />
          et énergie naturellement
        </h1>
        <h2>
          Apaisez vos maux vos tensions, éliminez votre stress
          <br />
          et regagnez un sommeil de qualité
        </h2>
        <Button
          onClick={() => {
            window.scrollTo(0, professionalsRef.current.offsetTop - 100);
          }}
          variant="large"
        >
          Je réserve ma séance
        </Button>
      </section>
      <Divider />
      <section>
        <SectionTitle text="Ce que nous vous proposons" />
        <div className={styles.cards}>
          <ExpertiseCard
            img={reflexologieCard}
            title="Réflexologie"
            subtitle="Faciale - Palmaire - plantaire"
            bodyText="Soulager de nombreux maux, effets du stress, insomnie, douleurs articulaires ou musculaires, lombalgie et troubles digestifs et bien d'autres..."
            to="/reflexologie"
          />
          <ExpertiseCard
            img={jmvCard}
            title="Méthode JMV"
            bodyText="Éliminer les éléments naturels pouvant affaiblir votre organisme (addictions, allergies, intolérances alimentaires, produits chimiques et pollution)."
            to="/methode-jmv"
          />
          <ExpertiseCard
            img={detenteCard}
            title="Détente articulaire et musculaire"
            bodyText="Libérer vos blocages et tensions grâce à une approche manuelle douce et performante qui prend en compte la globalité du corps."
            to="/detente-articulaire-et-musculaire"
          />
          <ExpertiseCard
            img={harmonisationCard}
            title="harmonisation physique et émotionnelle"
            bodyText="Accompagner vers un retour au bien-être corporel après un traumatisme (burn-out, accident corporel…), éliminer vos cicatrices émotionnelles, spirituelles et physiques."
            to="/harmonisation-physique-et-emotionnelle"
          />
        </div>
      </section>
      <Divider />
      <section>
        <SectionTitle text="Découvrez l'Atelier 15" />
        <div className={styles['place-section-container']}>
          <div className={styles['place-section-images']}>
            <div>
              <img src={place1} />
            </div>
            <div>
              <img src={place2} />
            </div>
            <div>
              <img src={place3} />
            </div>
            <div>
              <img src={place4} />
            </div>
          </div>
          <div className={styles['place-section-content']}>
            <p>
              Nous vous accueillons dans un espace professionnel adapté à la
              détente dans une ambiance chaleureuse, une atmosphère calme et
              reposante.
            </p>
            <Button>Accéder à l'atelier</Button>
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <SectionTitle text="Des professionnels certifiés" />
        <div className={styles['professionals-section-container']}>
          <img src={sample5} />
          <div className={styles['professionals-section-content']}>
            <p>
              Vous bénéficierez de soins par des professionnels certifiés, qui
              seront à l'écoute de vos besoins afin de définir avec vous la
              méthode la plus adaptée.
            </p>
            <Button>Découvrez nos professionnels</Button>
          </div>
        </div>
      </section>
      <Divider />
      <section ref={professionalsRef}>
        <SectionTitle text="Réservez votre séance" />
        <div className={styles['contact-section-container']}>
          <ContactCard
            fullName="Dominique TALLEUX"
            phoneNumber="06 10 22 24 87"
            expertises={[
              'Réflexologie faciale',
              'Méthode JMV',
              'Harmonisation physique et émotionnelle',
            ]}
            to="/professionnels/dominique-talleux"
          />
          <ContactCard
            fullName="Anne ZAKKA"
            phoneNumber="06 10 22 24 87"
            expertises={[
              'Réflexologie faciale, palmaire et plantaire',
              'Détente articulaire et musculaire',
            ]}
            to="/professionnels/anne-zakka"
          />
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
