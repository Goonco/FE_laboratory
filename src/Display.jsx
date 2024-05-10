const getString = (state) => {
  switch (state) {
    case "Default":
      return "Default";
    case "Success":
      return "Success";
    case "Loading":
      return "Loading";
    default:
      return "Error";
  }
};

const Display = ({ displayState, convertToDefaultState }) => {
  const displayString = getString(displayState);

  return (
    <div
      onClick={convertToDefaultState}
      className="w-full h-96 flex justify-center items-center shadow-inner cursor-pointer hover:bg-slate-100"
    >
      <span className="text-7xl">{displayString}</span>
    </div>
  );
};

export default Display;
