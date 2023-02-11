import SettingsList from "../components/SettingsList";
import PageHeading from "../components/PageHeading";

const SettingsPage: React.FC = () => {
  return (
    <>
        <PageHeading backUrl="/my-petmates" title="Settings" />
        <SettingsList />
    </>
  );
};

export default SettingsPage;
