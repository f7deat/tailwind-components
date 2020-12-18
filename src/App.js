import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Main from './layout/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex">
        <div className="w-1/5 border-r border-solid border-gray-300 p-4">
          <Sidebar/>
        </div>
        <div className="w-4/5 p-4">
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
