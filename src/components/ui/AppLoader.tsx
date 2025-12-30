import React from "react";

const AppLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050914]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
        <p className="text-sm text-gray-400 tracking-wide">
          Loading CoolRentZone…
        </p>
      </div>
    </div>
  );
};

export default AppLoader;
