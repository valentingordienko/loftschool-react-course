import marketReducer from './marketReducer';
import farmReducer from './farmReducer';
import budgetReducer from './budgetReducer';

const RootReducer = (storeState, action) => {

	return {
		market: marketReducer(storeState.market, action),
		farm: farmReducer(storeState.farm, action),
		budget: budgetReducer(storeState.budget, action),
	}
};


export default RootReducer;