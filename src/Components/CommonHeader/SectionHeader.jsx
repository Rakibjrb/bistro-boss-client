import PropTypes from "prop-types";

const SectionHeader = ({ toptitle, title }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="text-center">
        <h3 className="text-[#D99904] italic text-xl">{toptitle}</h3>
        <h2 className="text-4xl mt-6 py-2 px-10 border-t-4 border-b-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  toptitle: PropTypes.string,
  title: PropTypes.string,
};
export default SectionHeader;
