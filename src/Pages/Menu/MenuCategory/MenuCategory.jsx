import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 max-w-screen-xl mx-auto mt-16 p-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase ">
            Order Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
