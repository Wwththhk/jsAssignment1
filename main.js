function Product(name, price) {
    this.name = name
    this.price = price
}
let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000)
]

let productContainer = document.getElementById('productContainer')

products.forEach(product => {
    let productItem = document.createElement('div')
    productItem.className = 'product-item'
    productItem.textContent = `${product.name} - ${product.price}`
    productContainer.appendChild(productItem)
})