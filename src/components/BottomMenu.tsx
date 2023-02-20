import "../styles/components/bottomMenu.css";
import { Alarm, Inbox, Stats } from "./Icons";
import { useHistory } from "react-router";


interface BottomMenuProps {
	pageName: string;
}

const BottomMenu = ({ pageName }: BottomMenuProps) => {
	const history = useHistory();

	return (
		<>
			<div className="bottomMenu">
				<ul>
					<li
						className={`menuItem ${pageName === "settings" && ("active")}`}
						onClick={() => history.push("/dashboard/1/settings")}
					>
						<Alarm color="#EBEBED" />
					</li>
					<li
						className={`menuItem ${pageName === "progress" && ("active")}`}
						onClick={() => history.push("/dashboard/1/progress")}
					>
						<Stats color="#EBEBED" />
					</li>
					<li
						className={`menuItem ${pageName === "records" && ("active")}`}
						onClick={() => history.push("/dashboard/1/records")}
					>
						<Inbox color="#EBEBED" />
					</li>
				</ul>
			</div>
		</>
	);
};

export default BottomMenu;
