import "./app-filter.css";

const AppFilter = (props) => {
	const buttonsData = [
		{ name: "all", label: "Visi darbuotojai" },
		{ name: "rise", label: "Paaukštinti" },
		{ name: "moreThen1000", label: "Atlyginimas didesnis nei 1000EU" },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light";
		return (
			<button
				type="button"
				className={`btn ${clazz}`}
				key={name}
				onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
