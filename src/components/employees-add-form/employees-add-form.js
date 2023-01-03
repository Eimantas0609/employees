import "./employees-add-form.css";

const EmployeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Pridėti naują darbuotoją</h3>
			<form className="add-form d-flex">
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="Vardas, Pavardė?"
				/>
				<input
					type="number"
					className="form-control new-post-label"
					placeholder="Alga EU-ais?"
				/>

				<button type="submit" className="btn btn-outline-light">
					Pridėti
				</button>
			</form>
		</div>
	);
};

export default EmployeesAddForm;
