import blogImage from "./assets/blogimage.svg";
import avatarImage from './assets/avatar.webp';

function App() {
  return (
    <div className="bg-background w-screen h-screen  flex justify-center items-center">
      <div className="p-6 m-3 sm:m-6 bg-card w-[90%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] text-black rounded-2xl shadow-3xl">
        <div className="mb-8">
          <img src={blogImage} alt="blog image" className="w-full rounded-2xl" />
        </div>
        <div className="mb-4">
          <div className="p-2 bg-accent w-min font-bold rounded-md mb-3">
            Learning
          </div>
          <p>Published 21 Dec 2023</p>
        </div>
        <div className="flex flex-col mb-4">
          <div className="font-extrabold text-2xl mb-4">HTML & CSS Foundations</div>
          <div className="text-grey">
            These languages are the backbone of every website,
            defining structure, content, and presentation.
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
            <img src={avatarImage} alt="picture of a person" className="mr-4 w-12" />
            <div className="font-extrabold">
              Greg Hooper
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
