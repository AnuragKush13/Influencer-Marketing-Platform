import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-black text-white px-6 py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black opacity-50 blur-2xl"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          }}
        ></div>

        {/* Grid of fading lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute w-full h-[1px] bg-gray-800"
              style={{
                top: `${(i / 7) * 100}%`,
                opacity: 1 - i / 3,
              }}
            ></div>
          ))}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`v-line-${i}`}
             className="absolute h-[80%] w-[1px] bg-gray-800"
              style={{
                left: `${(i / 5) * 100}%`,
                opacity: 1 - i / 4,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className="z-20 w-full flex justify-between items-center max-w-6xl mx-auto relative">
        <div className="text-2xl font-bold">catchers.</div>
        <button className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700">
          Sign In
        </button>
      </header>

      {/* Main Section */}
      <main className="z-20 flex flex-col items-center text-center mt-16 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Transform Your Campaign Management
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl">
          Simplify the way you manage, create, and execute campaigns. With our
          platform, your next success is just a click away.
        </p>
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </button>
      </main>

      {/* Footer */}
      <footer className="z-20 text-center text-gray-500 mt-12 relative">
        © 2025 MyApp. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
