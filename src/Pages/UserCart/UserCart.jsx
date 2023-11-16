import useCart from "../../Hooks/useCart";

const UserCart = () => {
  const [cartItems] = useCart();
  console.log(cartItems);
  return (
    <div className="mt-[80px] max-w-7xl mx-auto px-3 xl:px-0">user cart</div>
  );
};

export default UserCart;
