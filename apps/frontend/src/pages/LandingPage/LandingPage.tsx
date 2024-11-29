import { FC } from 'react';
import HeroSection from './components/HeroSection';

const LandingPage: FC = () => {
  const HERO_HEADLINE = 'A retail toolchain for the retail investor.';
  const HERO_SUBTITLE =
    'Your guide to the world of an open financial system. Get started with our modern tools that will take you to the moon.';
  return <HeroSection headline={HERO_HEADLINE} subtitle={HERO_SUBTITLE} />;
};

export default LandingPage;
