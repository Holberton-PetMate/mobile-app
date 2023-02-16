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

      <div className="stockChartContainer">
        <H3>Stock</H3>
        <div className="stockChart">
          <Stat />
        </div>
      </div>
    </>
  );
};

export default ProgressPage;
