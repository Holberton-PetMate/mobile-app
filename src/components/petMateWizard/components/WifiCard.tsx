import { PropsWithoutRef } from 'react';
import "../../../styles/components/wifiCard.css";
import H3 from '../../fonts/H3';
import { WifiHigh } from '../../Icons';

interface WifiCardProps extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  name: string;
}

const WifiCard = ({ name, ...rest }: WifiCardProps) => {
  return (
    <div className="wifiCard" {...rest}>
      <H3>{name}</H3>
      <WifiHigh color="#fff" />
    </div>
  );
};

export default WifiCard;
