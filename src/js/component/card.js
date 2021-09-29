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
				<div className="ficha-body">
					<Link to={props.category + props.id} className="">
						<div>
							<p className="ficha-text">
								<img
									className={props.url}
									src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
									width="160px"
									alt="Card image cap"
								/>
							</p>
						</div>
					</Link>

					<div>
						<h5 className="ficha-title">{props.title}</h5>
					</div>
					<div>
						<button onClick={() => actions.setShoppingCart(props.title)} className="boton compra">
							Atrapalo ya!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	/* imagen: PropTypes.string, */
	title: PropTypes.string,
	id: PropTypes.object,
	category: PropTypes.string
};
