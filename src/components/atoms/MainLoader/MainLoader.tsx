"use client";

import Logo from "../Logo/Logo";

const MainLoader = () => {
  return (
    <div className="relative min-h-screen bg-[#F4F4F4] overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center mb-8">
            <div className="relative m-0">
              <div className="flex items-center justify-center animate-spin-slow">
                <Logo url="/assets/images/logo2.png" />
              </div>
            </div>
            <div className="m-0">
              <h1 className="text-5xl font-bold tracking-tight">
                <span className="text-gray-700">asis</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-green-700">
                  Afrik
                </span>
              </h1>
            </div>
          </div>
          <p className="text-green-700 text-lg font-light text-center tracking-wide">
            Connecting Africa to the World
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MainLoader;
