import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
	return (
		<div className="app-info">
			<h1>N kompanijos darbuotojų apskaita</h1>
			<h2>Viso darbuotojų: {employees}</h2>
			<h2>Premijas gauna: {increased}</h2>
		</div>
	);
};

export default AppInfo;
