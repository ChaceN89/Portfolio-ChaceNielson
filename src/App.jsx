import React from "react";
import IconLibrary from "./data/iconLibrary";
import ShowIcon from "./components/uiElements/ShowIcon";


function App() {

  return (
    <div className="p-10 grid grid-cols-4 gap-6">
      {Object.entries(IconLibrary).map(([key, skill]) => (
        <div key={key} className="flex flex-col items-center text-center">
          <ShowIcon skill={skill} size="3rem" useWhiteText={false} />
          <p className="mt-2 text-sm font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
