import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  return (
    <>
      <section className="mb-10">
        <SectionTitle
          subHeading={"From our Menu"}
          heading={"popular items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
