import "../styles/components/bottomMenu.css";
import { Alarm, Inbox, Stats } from "./Icons";
import { useHistory, useParams } from "react-router";


interface BottomMenuProps {
	pageName: string;
}

const BottomMenu = ({ pageName }: BottomMenuProps) => {
	const history = useHistory();
	const params = useParams() as any;

	return (
		<>
			<div className="bottomMenu">
				<ul>
					<li
						className={`menuItem ${pageName === "settings" && ("active")}`}
						onClick={() => history.push(`/dashboard/${params.petmate_id}/settings`)}
					>
						<Alarm color="#EBEBED" />
					</li>
					<li
						className={`menuItem ${pageName === "progress" && ("active")}`}
						onClick={() => history.push(`/dashboard/${params.petmate_id}/progress`)}
					>
						<Stats color="#EBEBED" />
					</li>
					<li
						className={`menuItem ${pageName === "records" && ("active")}`}
						onClick={() => history.push(`/dashboard/${params.petmate_id}/records`)}
					>
						<Inbox color="#EBEBED" />
					</li>
				</ul>
			</div>
		</>
	);
};

export default BottomMenu;
