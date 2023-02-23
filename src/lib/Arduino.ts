import axios from "axios";

const ApiInstanceArduino = async () => {
  return axios.create({
    baseURL: "http://192.168.4.1:80",
    headers: {
      "Accept": "*",
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
};
export interface WifiProps {
  ssid: string | null;
  password: string | null;
  rssi: number | null;
}

const ArduinoApi = {
  setWifi: async (data: WifiProps) => {
    const api = await ApiInstanceArduino();
    return await api.post('http://192.168.4.1:80/wifi', data);
  },
  getNetworks: async () => {
    const api = await ApiInstanceArduino();
    return await api.post('/scanNetworks');
  },
};

export default ArduinoApi;
