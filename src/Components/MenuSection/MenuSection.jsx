import PropTypes from "prop-types";
import MenuItems from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";

const MenuSection = ({ loading, items, category }) => {
  return (
    <div>
      {loading ? (
        "loading data ..."
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 mt-8">
          {items?.map((menu) => (
            <MenuItems key={menu._id} menu={menu} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <Link
          to={`/our-shop/${category}`}
          className="px-5 py-2 border-b-4 border-b-black uppercase rounded-b-lg hover:bg-gray-400 rounded-t-lg"
        >
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  category: PropTypes.string,
};
export default MenuSection;
