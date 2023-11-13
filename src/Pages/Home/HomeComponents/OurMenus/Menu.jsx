import PropTypes from "prop-types";

const Menu = ({ menu }) => {
  const { name, image, recipe, price } = menu;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.object,
};
export default Menu;
