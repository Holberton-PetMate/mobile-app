import { PropsWithoutRef } from 'react';
import { H1 } from '../../fonts';
import WifiCard from '../components/WifiCard';
import '../../../styles/pages/createPetMateWizard.css';
import { WifiProps } from '../../../lib/Arduino';

interface WifiListViewProps
  extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
  selectWifiSsid: (ssid: string | null) => void;
  networkList: WifiProps[];
}
const WifiListView = ({ selectWifiSsid, networkList }: WifiListViewProps) => {

  return (
    <>
      <H1>Choose your Wi-Fi:</H1>
      {networkList.map((wifi) => (
        <WifiCard name={wifi.ssid || ""} rssi={wifi.rssi || 130} onClick={() => selectWifiSsid(wifi.ssid)} key={wifi.ssid} />
      ))}
    </>
  );
};

export default WifiListView;
