import {combineReducers} from "redux"
import MaterialReducer from "./MaterialReducer"
import MeshReducer from "./MeshReducer"
import NodeReducer from "./NodeReducer"
import ProductReducer from "./ProductReducer"
import BackgroundColorReducer from "./BackgroundColorReducer";
import AutoRotateReducer from "./AutoRotateReducer";

const RootReducer = combineReducers({
  productStore: ProductReducer,
  nodeStore: NodeReducer,
  meshStore: MeshReducer,
  materialStore: MaterialReducer,
  backgroundColorStore: BackgroundColorReducer,
  autoRotateStore: AutoRotateReducer,
})

export default RootReducer
