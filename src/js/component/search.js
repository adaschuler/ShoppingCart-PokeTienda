/* import React, { useState } from "react";

function SearchList({ filteredPokemons }) {
  const filtered = filteredPokemons.map(pokemon =>  <Card key={item.id} pokemon={item} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;

function Search({ details }) {
	const [searchField, setSearchField] = useState("");

	const filteredPokemons = details.filter(pokemon => {
		return (
			pokemon.name.toLowerCase().includes(searchField.toLowerCase()) ||
			pokemon.email.toLowerCase().includes(searchField.toLowerCase())
		);
	});

	const handleChange = e => {
		setSearchField(e.target.value);
	};

	function searchList() {
		return (
			<Scroll>
				<SearchList filteredPokemons={filteredPokemons} />
			</Scroll>
		);
	}

	return (
		<section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Search your course</h2>
			</div>
			<div className="pa2">
				<input
					className="casilla"
					type="search"
					placeholder="Buscar Pokemones"
					onChange={handleChange}
				/>
			</div>
			{searchList()}
		</section>
	);
}

export default Search; */
