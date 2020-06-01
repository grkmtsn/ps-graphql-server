import ProductAPI from '../dataSource/product.ds';

const mocks = {
	get: jest.fn(),
	mockProductForShowcase: {
		id: '1',
		title: 'Mock Title',
		description: 'Mock Description',
		price: 9200.0,
		coverImageSrc: 'Mock Src 1',
		shipping: {
			free: false,
			instantly: false,
		},
		isFavorite: false,
	},
	mockProductForPriceDetails: {
		id: '1',
		title: 'Mock Title',
		priceHistory: [
			{ date: new Date(new Date().setDate(new Date().getDate() - 5)), price: 9800.0 },
			{ date: new Date(new Date().setDate(new Date().getDate() - 2)), price: 8800.0 },
			{ date: new Date(new Date().setDate(new Date().getDate() - 1)), price: 7200.0 },
			{ date: new Date(), price: 9200.0 },
		],
	},
	mockProductResponse: {
		_id: '1',
		title: 'Mock Title',
		description: 'Mock Description',
		pricing: [
			{ date: new Date(), price: 9200.0 },
			{ date: new Date(new Date().setDate(new Date().getDate() - 1)), price: 7200.0 },
			{ date: new Date(new Date().setDate(new Date().getDate() - 5)), price: 9800.0 },
			{ date: new Date(new Date().setDate(new Date().getDate() - 2)), price: 8800.0 },
		],
		images: [
			{
				src: 'Mock Src 1',
				isCover: true,
			},
			{
				src: 'Mock Src 2',
				isCover: false,
			},
		],
		ratimg: 4,
		shipping: {
			package: {
				weight: 12,
				height: 12,
				depth: 12,
			},
			cargo: {
				free: false,
				instantly: false,
			},
		},
		isFavorite: false,
	},
};

const ds = new ProductAPI();
ds.get = mocks.get;

describe('ProductAPI reducers', () => {
	it('properly transforms product for showcase', () => {
		expect(ds.productsShowCaseReducer(mocks.mockProductResponse)).toEqual(
			mocks.mockProductForShowcase
		);
	});

	it('properly transforms product for price details', () => {
		expect(ds.productPriceDetailReducer(mocks.mockProductResponse)).toEqual(
			mocks.mockProductForPriceDetails
		);
	});
});
