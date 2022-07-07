import Debounce from "./Debounce/Debounce";
import MyFirstApp from "./MyFirstApp/Components/MyFirstApp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContextAndReducer from "./Context&Reducer/ContextAndReducer";
import FoodApp from "./foodApp/components/FoodApp";
import MovieHome from "./MoviesHttp/MovieHome";
import CustomHook from "./CustomHook/CustomHook";


function App() {
  return (
    <div className="App">
      {/* <MyFirstApp /> */}
      {/* <Debounce /> */}
      {/* <ContextAndReducer /> */}
      {/* <FoodApp /> */}
    <MovieHome />
    {/* <CustomHook /> */}
    </div>
  );
}

export default App;
