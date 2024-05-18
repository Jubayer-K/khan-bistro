import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <>
      <section className="featured-item bg-fixed pt-8 my-20">
        <SectionTitle heading={"Featured Item"} subHeading={"Check it out"} />

        <div className="lg:flex justify-center items-center md:px-36 md:pb-20 md:pt-12 space-y-8 gap-10 py-10 backdrop-blur-sm bg-white/30">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4 px-4 text-gray-800">
            <p>Aug 20 , 2024</p>
            <p className="uppercase">Where can i get some ?</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              expedita, quibusdam illum mollitia, delectus quaerat laboriosam
              deleniti consequatur sit perferendis dolorum ipsam unde placeat?
              Facere suscipit, voluptates laboriosam et omnis dolores quidem?
              Accusantium pariatur doloremque necessitatibus porro. Reiciendis
              eligendi eum tempore cupiditate? Fugit adipisci cupiditate rem
              omnis molestias. Aperiam, vero.
            </p>
            <button className="btn btn-outline border-0 border-b-4 uppercase">Order Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
