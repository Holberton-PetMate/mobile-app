import "../styles/components/bottomMenu.css";
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
					<Alarm color="#1B212D" />
				</li>
				<li 
					className="menuItem"
					onClick={() => history.push("/dashboard/1/progress")}
				>
					<Stats color="#1B212D" />
				</li>
				<li 
					className="menuItem"
					onClick={() => history.push("/dashboard/1/records")}
				>
					<Inbox color="#1B212D" />
				</li>
			</ul>
		</div>
	</>
  );
};

export default BottomMenu;
