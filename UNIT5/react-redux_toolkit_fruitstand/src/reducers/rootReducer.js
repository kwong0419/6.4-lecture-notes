import farmersSlice from "../features/farmers/farmersSlice";
import fruitStandSlice from "../features/fruitStand/fruitStandSlice";

const reducer = {
  fruits: fruitStandSlice,
  farmers: farmersSlice,
};

export default reducer;
