/* eslint-disable no-underscore-dangle */
import { RESTDataSource } from 'apollo-datasource-rest';

const BASE_URL = 'http://64.227.82.106:5000/products';

class ProductAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = BASE_URL;

		this.productsShowCaseReducer = (product) => {
			return {
				id: product._id || 0,
				title: product.title,
				description: product.description,
				price: product.pricing
					.slice()
					.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
					.price,
				coverImageSrc: product.images.find((image) => image.isCover === true).src,
				shipping: {
					free: product.shipping.cargo.free || false,
					instantly: product.shipping.cargo.instantly || false,
				},
				isFavorite: product.isFavorite,
			};
		};

		this.productPriceDetailReducer = (product) => {
			return {
				id: product._id || 0,
				title: product.title,
				priceHistory: product.pricing
					.slice()
					.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
					.reverse(),
			};
		};
	}

	async getAllProductsForShowCase() {
		const { data } = await this.get('/');
		return Array.isArray(data)
			? data.map((product) => this.productsShowCaseReducer(product))
			: [];
	}

	async getProductPriceDetails(id) {
		const { data } = await this.get(`/${id}`);
		return this.productPriceDetailReducer(data);
	}

	async toggleFavoriteProduct(id) {
		const response = await this.post('toggle-favorite', { id });
		return response;
	}
}

export default ProductAPI;
