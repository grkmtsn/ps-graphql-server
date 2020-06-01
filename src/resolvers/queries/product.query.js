export default {
	productsForShowCase: (obj, args, { dataSources }) => {
		return dataSources.productsAPI.getAllProductsForShowCase();
	},
	productPriceHistory: (obj, { id }, { dataSources }) => {
		return dataSources.productsAPI.getProductPriceDetails(id);
	},
};
