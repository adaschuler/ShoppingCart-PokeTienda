import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const CardType = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div>
			<div className="categoriasecciones">
				<div className="secciones">
					<div>
						<span className="seccionestexto">{props.title}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

CardType.propTypes = {
	title: PropTypes.string,
	id: PropTypes.object
};
