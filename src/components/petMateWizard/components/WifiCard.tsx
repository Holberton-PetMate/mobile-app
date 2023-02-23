import { PropsWithoutRef } from 'react';
import "../../../styles/components/wifiCard.css";
import H3 from '../../fonts/H3';
import { WifiHigh, WifiMid, WifiLow } from '../../Icons';

interface WifiCardProps extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  name: string;
  rssi: number;
}

const WifiCard = ({ name, rssi, ...rest }: WifiCardProps) => {
  return (
    <div className="wifiCard" {...rest}>
      <H3>{name}</H3>
      {rssi > -80 && <WifiHigh color='#fff'/>}
      {rssi < -79 && rssi > -95 && <WifiMid color='#fff'/>}
      {rssi < -94 && <WifiLow color='#fff'/>}
    </div>
  );
};

export default WifiCard;
