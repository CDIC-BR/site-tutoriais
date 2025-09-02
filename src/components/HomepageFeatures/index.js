import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Componente Feature individual
function Feature({ Svg, image, title, description, to, href }) {
  const ImageWrapper = ({ children }) => {
    if (to) {
      return (
        <Link to={to} className={styles.featureLink}>
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a
          href={href}
          className={styles.featureLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ImageWrapper>
          {Svg ? (
            <Svg className={styles.featureSvg} role="img" />
          ) : image ? (
            <img src={image} alt={title} className={styles.featureImg} />
          ) : null}
        </ImageWrapper>
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Lista de Features
const FeatureList = [
  {
    title: 'CNBB',
    Svg: require('@site/static/img/cnbb.svg').default,
    href: 'https://www.cnbb.org.br',
    description: (
      <>A Conferência Nacional dos Bispos do Brasil (CNBB) é a instituição que reúne os bispos do Brasil, promovendo a missão evangelizadora e atuando como espaço de discernimento e serviço à Igreja e à sociedade.</>
    ),
  },
  {
    title: 'Edições CNBB',
    Svg: require('@site/static/img/try.svg').default,
    href: 'https://www.edicoescnbb.com.br',
    description: (
      <>Órgão Filial da CNBB, a Edições CNBB contribui para a evangelização, publicando conteúdos acessíveis, inovadores e relevantes.</>
    ),
  },
  {
    title: 'CDIC-BR',
    subtitle: '*nome e logo provisório',
    Svg: require('@site/static/img/t5.svg').default,
    to: 'https://sistemacdicbr.cnbb.org.br/',
    description: (
      <>O Centro de Dados da Igreja Católica no Brasil (CDIC-BR) é uma iniciativa estratégica da CNBB que oferece soluções unificadas e seguras para a gestão de informações eclesiais, garantindo a curadoria dos dados e apoiando a missão evangelizadora.</>
    ),
  },
];

// Componente HomepageFeatures com título antes da lista
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Título antes das features */}
        <div className="text--center" style={{ marginBottom: '2rem' }}>
          <Heading as="h2" className={styles.featuresTitle}>
  Quem somos
</Heading>
        </div>

        {/* Lista de features */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

