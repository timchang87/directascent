import { FC } from 'react';
import { Button } from '@radix-ui/themes';

interface DualButtonsProps {
  variant?: string;
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

const DualButtons: FC<DualButtonsProps> = ({
  variant = 'default',
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className={`dual-buttons-widget-${variant}`}>
      <Button className="primary" onClick={onPrimaryClick}>
        {primaryText}
      </Button>
      <Button className="secondary" onClick={onSecondaryClick}>
        {secondaryText}
      </Button>
    </div>
  );
};

export default DualButtons;
