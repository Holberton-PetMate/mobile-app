import { PropsWithoutRef } from 'react';
import { H1 } from '../../fonts';
import WifiCard from '../components/WifiCard';
import '../../../styles/pages/createPetMateWizard.css';

interface WifiListViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  selectWifiSsid: (ssid: string) => void;
}
const WifiListView = ({ selectWifiSsid }: WifiListViewProps) => {
  const wifiList = [
    {
      ssid: 'Holberton School',
      latency: 80,
    },
    {
      ssid: 'Holberton Guest',
      latency: 10,
    },
    {
      ssid: 'Holberton Students',
      latency: 30,
    },
    {
      ssid: 'Holberton',
      latency: 90,
    },
    {
      ssid: 'Quinto',
      latency: 50,
    },
  ];

  return (
    <>
      <H1>Choose your Wi-Fi:</H1>
      {wifiList.map((wifi) => (
        <WifiCard name={wifi.ssid} onClick={() => selectWifiSsid(wifi.ssid)} key={wifi.ssid} />
      ))}
    </>
  );
};

export default WifiListView;
