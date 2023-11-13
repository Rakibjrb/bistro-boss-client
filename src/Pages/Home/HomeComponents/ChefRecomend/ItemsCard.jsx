import PropTypes from "prop-types";

const ItemsCard = ({ menu }) => {
  const { name, image, recipe } = menu;
  return (
    <div className="bg-base-200">
      <figure>
        <img className="w-full h-[250px]" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-center mb-4">{name}</h2>
        <p className="text-center min-h-[76px]">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="font-bold mt-4 text-yellow-700 bg-gray-400 px-5 py-3 border-b-4 border-b-yellow-700 uppercase rounded-b-lg hover:bg-gray-600 rounded-t-lg hover:border-none">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

ItemsCard.propTypes = {
  menu: PropTypes.object,
};
export default ItemsCard;
