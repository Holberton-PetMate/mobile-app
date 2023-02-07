import "../styles/layouts/MainLayout.css";
import { Alarm, Inbox, Stats } from "./Icons";
import { useHistory } from "react-router";

const BottomMenu = () => {
	const history = useHistory();

  return (
	<>
		<div className="bottomMenu">
			<ul>
				<li 
					className="menuItem"
					onClick={() => history.push("/dashboard/1/settings")}
				>
					<Alarm />
				</li>
				<li 
					className="menuItem"
					onClick={() => history.push("/dashboard/1/progress")}
				>
					<Stats />
				</li>
				<li 
					className="menuItem"
					onClick={() => history.push("/dashboard/1/records")}
				>
					<Inbox />
				</li>
			</ul>
		</div>
	</>
  );
};

export default BottomMenu;
