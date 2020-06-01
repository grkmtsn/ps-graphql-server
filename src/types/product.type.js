import { gql } from 'apollo-server-express';

const productShowCaseTypeDefs = gql`
	type Shipping {
		free: Boolean
		instantly: Boolean
	}

	type Product {
		id: ID!
		title: String
		description: String
		shipping: Shipping
		coverImageSrc: String
		price: Int
		isFavorite: Boolean
	}

	type Price {
		date: String
		price: Int
	}

	type PriceHistory {
		id: ID!
		title: String
		priceHistory: [Price]
	}

	type Query {
		productsForShowCase: [Product]
		productPriceHistory(id: ID!): PriceHistory
	}

	type ToggleStatus {
		success: Boolean
	}

	type Mutation {
		toggleFavoriteProduct(id: String): ToggleStatus
	}
`;

export default productShowCaseTypeDefs;
