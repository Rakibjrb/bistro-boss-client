const UserCart = () => {
  return (
    <div className="pl-2">
      <h2 className="text-4xl text-center font-bold pt-2">My Cart</h2>
      <div className="flex justify-between">
        <h4 className="text-2xl font-semibold">Total Items : {0}</h4>
        <h4 className="text-2xl font-semibold">Total Price : {0}</h4>
      </div>
    </div>
  );
};

export default UserCart;
