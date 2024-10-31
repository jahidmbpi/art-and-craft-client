import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userlogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userlogIn);
  const handeleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userlogIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className=" w-full">
      <div className="w-[35%] m-auto p-4 mt-[100px] border rounded-lg bg-zinc-200 ">
        <h2 className="text-center text-3xl font-serif">Please Singh In</h2>
        <form onSubmit={handeleLogIn}>
          <div className=" justify-center  ">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="enter your email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className=" justify-center  ">
            <label className="label">
              <span className="label-text">password</span>
            </label>
            <label className="input-group">
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="mt-6">
            <button className="btn join-item w-full bg-green-600">
              please logIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
