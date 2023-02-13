import SettingsList from '../components/SettingsList';
import PageHeading from '../components/PageHeading';
import ModalCard from '../components/ModalCard';

const SettingsPage: React.FC = () => {
  return (
    <>
      <PageHeading backUrl="/my-petmates" title="Settings" />
      <SettingsList />
      <ModalCard action="create" title="New feeding time">
      </ModalCard>
    </>
  );
};

export default SettingsPage;
