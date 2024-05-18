const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="flex space-x-4 items-center justify-center">
        <img className="md:w-32 md:h-28 w-20" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
        <div>
            <h3 className="uppercase">{name}------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-base text-yellow-600">{price}</p>
      </div>
    </>
  );
};

export default MenuItem;
