import SettingsList from "../components/SettingsList";
import PageHeading from "../components/PageHeading";
import ModalCard from "../components/ModalCard";
import H3 from "../components/fonts/H3";


const SettingsPage: React.FC = () => {
  return (
    <>
        <PageHeading backUrl="/my-petmates" title="Settings" />
        <SettingsList />
        <ModalCard action="Create" title="New feeding time">
        </ModalCard>
    </>
  );
};

export default SettingsPage;