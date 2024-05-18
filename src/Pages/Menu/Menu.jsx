import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <>
        <Helmet>
            <title>Khan Bistro | Menu</title>
        </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
        </>
    );
};

export default Menu;