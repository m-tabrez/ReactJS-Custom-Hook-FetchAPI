import Debounce from "./Debounce/Debounce";
import MyFirstApp from "./MyFirstApp/Components/MyFirstApp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContextAndReducer from "./Context&Reducer/ContextAndReducer";
import FoodApp from "./foodApp/components/FoodApp";
import MovieHome from "./MoviesHttp/MovieHome";
import CustomHook from "./CustomHook/CustomHook";
import ValidationHome from "./Validation/ValidationHome";
import ContextCrud from "./ContextCrud/ContextCrud";
import ReduxToolkit from './ReduxToolKit/ReduxToolkit'
import CrudWithReduxToolkit from "./CrudWithReduxToolkit/CrudWithReduxToolkit";
import FetchHook from "./FetchHook/FetchHook";


function App() {
  return (
    <div className="App">
      {/* <MyFirstApp /> */}
      {/* <Debounce /> */}
      {/* <ContextAndReducer /> */}
      {/* <FoodApp /> */}
    {/* <MovieHome /> */}
    {/* <CustomHook /> */}
    {/* <ValidationHome /> */}
    {/* <ContextCrud /> */}
    {/* <ReduxToolkit /> */}
    {/* <CrudWithReduxToolkit/> */}
    <FetchHook />
    </div>
  );
}

export default App;
