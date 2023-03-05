class ProductManager {
  constructor(products = []) {
    this.products = products;
    this.idCounter = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      throw new Error("Todos los campos son obligatorios");
    }

    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      throw new Error("Ya existe un producto con este código");
    }

    const newProduct = { ...product, id: this.idCounter };
    this.products.push(newProduct);
    this.idCounter++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error("Not found");
      return null;
    }

    return product;
  }
}
function deleteProduct(id) {
  const productIndex = productManager.deleteProduct(id);
  if (productIndex !== -1) {
    const productItem = document.getElementById(`product-${id}`);
    productItem.classList.add("fade-out"); // Agrega la clase para la animación
    setTimeout(() => {
      productItem.remove();
    }, 1000); // Elimina el elemento después de un segundo
  }
}
