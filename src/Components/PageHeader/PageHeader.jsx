import PropTypes from "prop-types";

const PageHeader = ({ img, title }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="flex justify-center items-center py-20 md:h-[500px] mb-16"
    >
      <div className="w-4/5 bg-[#00000090] px-10 py-16">
        <h2 className="uppercase text-center text-4xl mb-5 text-white">
          {title}
        </h2>
        <p className="lg:w-3/4 mx-auto text-center text-white">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
export default PageHeader;
