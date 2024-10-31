import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { userSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    const newUser = { email, password, name, photo };

    userSignUp(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center  mt-14 ">
      <div className="w-[50%]   border rounded-lg shadow-lg">
        <h2 className="text-center font-serif text-3xl font-semibold my-6">
          please register
        </h2>
        <div className="items-center justify-center w-[70%] m-auto p-4 rounded-lg">
          <form onSubmit={handelLogIn}>
            <div className=" border p-4 rounded-lg space-y-6">
              <div className=" ">
                <label className="flex flex-col">
                  <input
                    className="border h-10 rounded-lg items-center p-2 border-xl"
                    type="text"
                    name="name"
                    placeholder="enter your name "
                  />
                </label>
              </div>
              <div className=" ">
                <label className="flex flex-col">
                  <input
                    className="border h-10 rounded-lg items-center p-2 border-xl"
                    type="email"
                    name="email"
                    placeholder="enter your email "
                  />
                </label>
              </div>
              <div className=" ">
                <label className="flex flex-col">
                  <input
                    className="border h-10 rounded-lg items-center p-2 border-xl"
                    type="password"
                    name="password"
                    placeholder="enter your password "
                  />
                </label>
              </div>
              <div className=" ">
                <label className="flex flex-col">
                  <input
                    className="border h-10 rounded-lg items-center p-2 border-xl"
                    type="text"
                    name="photo"
                    placeholder="enter your photo url "
                  />
                </label>
              </div>
              <div className="mb-11">
                <button className="btn w-full bg-green-500">c</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
