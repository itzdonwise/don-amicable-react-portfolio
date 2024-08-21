

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold  inline  border-b-4 border-gray-500 hover:text-blue-200 duration-300" >
            About
          </p>
        </div>

        <p className=" text-xl mt-20">
          
I am a passionate full-stack developer with a love for building dynamic, user-centric web applications. My journey in the tech world began with a curiosity for how things work under the hood, which quickly grew into a career driven by innovation and a desire to create seamless digital experiences.
        </p>

        <p className="text-xl mt-10">
          
With expertise in front-end technologies like HTML, CSS, JavaScript, and React, combined with a strong command of back-end development using Node.js, Express, and databases like MongoDB and SQL, I bring a comprehensive approach to building robust web applications.
        </p>
        <p className="text-xl mt-10">
          
        I’m excited about the future of web development and am always on the lookout for opportunities to work on challenging projects that push the boundaries of what’s possible. Let’s create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default About;
