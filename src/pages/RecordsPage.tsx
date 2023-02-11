import RecordsList from "../components/RecordsList";
import PageHeading from "../components/PageHeading";

const RecordsPage = () => {
  return (
    <>
      <PageHeading backUrl="/my-petmates" title="Records"/>
	  <RecordsList />
    </>
  );
};

export default RecordsPage;
