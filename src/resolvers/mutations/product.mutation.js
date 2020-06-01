export default {
	toggleFavoriteProduct: (obj, { id }, { dataSources }) => {
		return dataSources.productsAPI.toggleFavoriteProduct(id);
	},
};
