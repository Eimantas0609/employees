import "./app-filter.css";

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button type="button" className="btn btn-light">
				Visi darbuotojai
			</button>
			<button type="button" className="btn btn-outline-light">
				Paaukštinti
			</button>
			<button type="button" className="btn btn-outline-light">
				Alga didesnė nei 1000 EU
			</button>
		</div>
	);
};

export default AppFilter;
