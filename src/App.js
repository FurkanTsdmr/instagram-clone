import { useEffect, useRef, useState } from "react";

function App() {
  // Phone Animation Start
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 1750);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  // Phone Animation End

  // Disabled Button to empty username and password func.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

  return (
    //  {/* Login Page Anımation */}
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center gap-x-8">
      {/* //  Login Page Anımation End */}
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>
      {/* Form -Logo Start */}
      <div className="w-[350px] bg-white border pt-10 px-[50px] pb-2 grid gap-y-1.5 ">
        <a href="#" className="flex justify-center mb-4">
          <img
            className="h-[51px] w-[175px]"
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt=""
          />
        </a>
        <form>
          <label className="block relative">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required={true}
              className="bg-zinc-50 border w-full h-[38px] rounded-sm focus:border-gray-400 outline-none px-2 text-xs valid:pt-[10px]  peer"
            />
            <small className="absolute top-1/2  cursor-text pointer-events-none -translate-y-1/2 text-xs text-gray-500 left-[9px] peer-valid:text-[10px] peer-valid:top-2.5 transition-all">
              Phone number, username or email
            </small>
          </label>
        </form>
        {/* Password Start */}
        <form>
          <label className="block relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required={true}
              className="bg-zinc-50 border w-full h-[38px] rounded-sm focus:border-gray-400 outline-none px-2 text-xs valid:pt-[10px]  peer"
            />
            <small className="absolute top-1/2  cursor-text pointer-events-none -translate-y-1/2 text-xs text-gray-500 left-[9px] peer-valid:text-[10px] peer-valid:top-2.5 transition-all">
              Password
            </small>
          </label>
          {/* Button */}
          <button
            disabled={!enable}
            type="submit"
            className="h-[30px] rounded-md bg-brand text-white text-sm w-full disabled:opacity-50 font-medium mt-2 "
          >
            Log In
          </button>
          {/* Or */}
          <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1 " />
            <span className="px-4 text-[13px] text-gray-500 font-semibold">
              OR
            </span>
            <div className="h-px bg-gray-300 flex-1 " />
          </div>
        </form>
        {/* Password End */}
      </div>
    </div>
    // Form -Logo End
  );
}

export default App;
