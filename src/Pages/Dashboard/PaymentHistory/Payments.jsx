import PropTypes from "prop-types";

const Payments = ({ payment, index }) => {
  const { price, email, date, status } = payment;

  return (
    <tr>
      <th>
        <h4 className="text-xl">{index + 1}.</h4>
      </th>
      <td>
        <h3 className="text-xl">{email}</h3>
      </td>
      <td>
        <h3 className="text-xl">{parseInt(price)}$</h3>
      </td>
      <td>
        <h4 className="text-xl">{date}</h4>
      </td>
      <th>
        <button className="btn btn-sm btn-error text-white">{status}</button>
      </th>
    </tr>
  );
};

Payments.propTypes = {
  payment: PropTypes.object,
  index: PropTypes.number,
};
export default Payments;
