import PageHeading from '../components/PageHeading';
import Stat from '../components/Stat';
import H3 from '../components/fonts/H3';
import '../styles/pages/progressPage.css';

const ProgressPage: React.FC = () => {
  return (
    <>
      <PageHeading backUrl="/my-petmates" title="Progress" />
      <div className="progressSelector">
        <button className="todayButton">
          <span>Today</span>
        </button>
        <button className="weekButton">
          <span>Week</span>
        </button>
      </div>

      <div className="dietChartContainer">
        <H3>Diet</H3>
        <div className="dietChart">
          <Stat />
        </div>
      </div>

      <div className="stockContainer">
        <div className="foodStatus">
          <H3>Food status</H3>
          <div className="foodStock">
            <div className="food"></div>
          </div>
          <span>50%</span>
        </div>
        <div className="bowlStatus">
          <H3>Bowl Status</H3>
          <div className="bowlStock">
            <div className="bowl"></div>
          </div>
          <span>30%</span>
        </div>
      </div>
    </>
  );
};

export default ProgressPage;
