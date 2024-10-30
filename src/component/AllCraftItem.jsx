import { useLoaderData } from "react-router-dom";

const AllCraftItem = () => {
  const allCraftdata = useLoaderData();
  // const [craft, setCraft] = useState(null);
  // const {
  //   procesing,
  //   price,
  //   photo,
  //   itemName,
  //   description,
  //   SubCategory_name,
  //   Rating,
  //   userEmail,
  // } = craft;
  // console.log(
  //   procesing,
  //   price,
  //   photo,
  //   itemName,
  //   description,
  //   SubCategory_name,
  //   Rating,
  //   userEmail
  // );
  return (
    <div>
      <div className="my-10 text-center  space-y-4">
        <h2 className=" text-3xl font-semibold font-serif">
          Chose your Art & Craft{" "}
        </h2>
        <p>
          from painting and pottery to paper crafting and sewing,
          <br /> offers different materials, techniques, and experiences.{" "}
          Exploring diverse crafts not <br /> only develops new skills but also
          nurtures personal expression, making it a fulfilling journey.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {allCraftdata.map((craftdata) => (
          <div
            key={craftdata._id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={allCraftdata.photo} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCraftItem;
