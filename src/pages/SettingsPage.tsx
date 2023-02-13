import SettingsList from "../components/SettingsList";
import PageHeading from "../components/PageHeading";
import ModalCard from "../components/ModalCard";
import "../styles/components/modalCard-children.css";
import Clock from "../components/Clock";

const SettingsPage: React.FC = () => {
  return (
    <>
      <PageHeading backUrl="/my-petmates" title="Settings" />
      <SettingsList />

      <ModalCard action="create" title="New feeding time">
        <div className="modal-container">
          <div className="time-selector">
            <h3 className="children-title">Time</h3>
            <div className="clock-container">
              <Clock />
            </div>
          </div>
          <div className="quantity-selector">
            <div className="quantity-title">
              <h3 className="children-title">Quantity of food</h3>
            </div>
            <div className="input-container">
              <input className="quantity-input"></input>
              <span>gr.</span>
            </div>
          </div>
        </div>
      </ModalCard>
    </>
  );
};

export default SettingsPage;
