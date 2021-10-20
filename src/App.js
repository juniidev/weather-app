import React from 'react'
const api = {
  key: "df115e32f2ff421eda4f4460e13d479c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app ">
      <main>
        <div className="search-box">
          <input
            type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
