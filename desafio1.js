class ProductManager {
	products;
	lastId;

	constructor() {
		this.products = [];
		this.lastId = 0;
	}

	addProduct(title, description, price, thumbnail, code, stock) {
		try {
			if (
				title === undefined ||
				description === undefined ||
				price === undefined ||
				thumbnail === undefined ||
				code === undefined ||
				stock === undefined
			) {
				throw new Error('Todos los campos son obligatorios');
			}

			const existingProduct = this.products.find(
				(product) => product.code === code
			);
			if (existingProduct) {
				throw new Error('El código del producto ya está en uso');
			}

			this.lastId++;
			const newProduct = {
				id: this.lastId,
				title,
				description,
				price,
				thumbnail,
				code,
				stock,
			};
			this.products.push(newProduct);
		} catch (error) {
			console.log(error);
		}
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		try {
			const product = this.products.find((dato) => dato.id === id);

			if (product !== undefined) {
				return product;
			}

			throw new Error('No existe el producto solicitado');
		} catch (error) {
			console.log(error);
			return 'No existe el producto solicitado';
		}
	}
}

const productManager = new ProductManager();

console.log(productManager.getProducts());
//[]

productManager.addProduct(
	'producto 1',
	'Este es un producto prueba 1',
	50,
	'Sin imagen',
	'123abc',
	15
);
productManager.addProduct(
	'producto 2',
	'Este es un producto prueba 2',
	80,
	'Sin imagen',
	'123abcde',
	8
);
productManager.addProduct(
	'producto 3',
	'Este es un producto prueba 3',
	60,
	'Sin imagen',
	'123abcdefg',
	4
);
//addProduct

productManager.addProduct(
	'producto duplicado',
	'Este es otro producto',
	50,
	'Imagen duplicada',
	'123abc',
	10
);
//error

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(3));
//getProductById
