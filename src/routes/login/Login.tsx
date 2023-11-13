export const Login = () => {
  return (
    <div className="bg-[#E1ECC8] flex justify-center align-middle w-full h-[100vh] overflow-hidden">
      <div className="flex flex-col align-middle justify-center gap-16">
        <p className="login font-alegreya text-center text-[2rem] font-medium text-[#19212C] relative">
          Login
        </p>
        <form className="flex flex-col align-middle gap-8 rounded-2xl bg-[#FCFCFC] w-[32rem] p-[3rem]">
          <div className="containerInput">
            <label htmlFor="username" className="labelInput">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="input"
            />
          </div>
          <div className="containerInput">
            <label htmlFor="password" className="labelInput">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
            />
          </div>
          <span className="textForm text-right">Forgot My Password</span>
          <div className="flex justify-center">
            <button className="bg-[#B0D9B1] w-full h-12 rounded-xl text-white text-lg font-bold">
              Sign In
            </button>
          </div>
          <span className="textForm text-center">Create New Account</span>
        </form>
      </div>
    </div>
  );
};
