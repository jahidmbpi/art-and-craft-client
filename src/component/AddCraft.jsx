const AddCraft = () => {
  const handelAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.name.value;
    const photo = form.photo.value;
    const username = form.username.value;
    const userEmail = form.userEmail.value;
    const price = form.price.value;
    const SubCategory_name = form.SubCategory_name.value;
    const procesing = form.procesing.value;
    const Rating = form.Rating.value;
    const description = form.description.value;
    const newArtCraft = {
      itemName,
      photo,
      price,
      procesing,
      SubCategory_name,
      Rating,
      description,
      username,
      userEmail,
    };
    console.log(newArtCraft);
    fetch("http://localhost:5000/arrtAndcraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("data post successfully");
      });
  };
  return (
    <div className="">
      <div className=" mt-[50px] ">
        <div className="text-center my-10 ">
          <h2 className="text-3xl font-semibold font-serif ">Add your Craft</h2>
          <p>
            Add Art and Craft are two essential branches of creativity. <br />
            Add Art expresses emotions and ideas through artistic forms, while
            Craft emphasizes the intricacies of handmade creations. Both fields
            represent culture <br /> and reflect human thoughts and feelings,
            leaving a lasting impact on society. Together, they enrich our
            artistic landscape.
          </p>
        </div>
        <form onSubmit={handelAddCraft}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center  p-2">
            <div className="">
              <label className="flex flex-col">
                <span>item name:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="name"
                  placeholder="enter your art and craft "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>user name:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="username"
                  placeholder="enter your art and craft photo url "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>price:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="price"
                  placeholder="enter your art and craft price "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>SubCategory_name:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="SubCategory_name"
                  placeholder="enter your art and craft SubCategory_name "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>short descripetion:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="description"
                  placeholder="enter your art and craft short descripetion"
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>Rating:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="Rating"
                  placeholder="enter your art and craft  rating"
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>Coustomizetion example:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="Coustomizetion "
                  placeholder="enter your art and craft coustomizetin example "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>procesing time:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="procesing"
                  placeholder="enter your art and craft procesing time "
                />
              </label>
            </div>
            {/* ............... */}
            <div className="">
              <label className="flex flex-col">
                <span>Stok_status:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="stok-status"
                  placeholder="enter your art and craft stok status "
                />
              </label>
            </div>
            <div className="">
              <label className="flex flex-col">
                <span>User email:</span>
                <input
                  className="border h-10 rounded-lg items-center p-2 border-xl"
                  type="text"
                  name="userEmail"
                  placeholder="enter your email "
                />
              </label>
            </div>
          </div>
          <div className="">
            <label className="flex flex-col">
              <span>Photo:</span>
              <input
                className="border h-10 rounded-lg items-center p-2 border-xl"
                type="text"
                name="photo"
                placeholder="enter your photo url"
              />
            </label>
          </div>
          <div className="w-full mt-4 ">
            <button className="btn bg-green-700  w-full">Add Craft</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
