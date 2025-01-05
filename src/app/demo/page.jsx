import "./cascadeSelect.css";

const Timer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
      <div className="w-full px-8 py-4 border-2 rounded text-center">
        <div className="w-24 h-24 bg-gray-200 rounded"></div>
      </div>
      <div className="w-full px-8 py-4 border-2 rounded text-center">
        <div className="w-24 h-24 bg-gray-200 rounded"></div>
      </div>
      <div className="w-full px-8 py-4 border-2 rounded text-center">
        <div className="w-24 h-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Timer;
