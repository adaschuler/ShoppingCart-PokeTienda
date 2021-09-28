import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="">
			<div className="ficha">
				<img className={props.url} src={props.imagen} alt="Card image cap" />
				<div className="ficha-body">
					<Link to={props.category + props.id} className="">
						<div>
							<p className="ficha-text">
								{/* {props.contenido.map((item, index) => {
									return (
										<p key={index}>
											{item.label}: {item.value}
										</p>
									);
								})} */}
							</p>
						</div>
					</Link>
					<div>
						<button onClick={() => actions.setShoppingCart(props.title)} className="boton compra">
							ATRAPALO YA
						</button>
					</div>
					<div>
						<h5 className="ficha-title">{props.title}</h5>
						<h5 className="ficha-title">{props.peso}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	imagen: PropTypes.string,
	title: PropTypes.string,
	peso: PropTypes.string,
	contenido: PropTypes.array,
	id: PropTypes.object,
	category: PropTypes.string
};
