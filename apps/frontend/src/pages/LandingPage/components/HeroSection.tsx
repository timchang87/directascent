import { FC } from 'react';
import DualButtons from '../../../widgets/DualButtons/DualButtons';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  headline: string;
  subtitle: string;
}

const HeroSection: FC<HeroSectionProps> = ({ headline, subtitle }) => {
  const navigate = useNavigate();

  const onPrimaryClick = () => navigate('/dashboard');
  const onSecondaryClick = () => navigate('/pricing');

  return (
    <div className="hero-section">
      <div className="headline">{headline}</div>
      <div className="subtitle">{subtitle}</div>
      <DualButtons
        primaryText="Get Started"
        secondaryText="Learn More"
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    </div>
  );
};

export default HeroSection;
