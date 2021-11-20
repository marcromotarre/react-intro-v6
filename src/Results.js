import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map(({ id, images, city, state, name, animal, breed }) => (
          <Pet
            key={id}
            id={id}
            images={images}
            city={city}
            state={state}
            name={name}
            animal={animal}
            breed={breed}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default Results;
