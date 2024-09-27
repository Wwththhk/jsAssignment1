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
let selectedProductsDiv = document.getElementById('selectedProducts')
let totalPriceDiv = document.getElementById('totalPrice')

let totalPrice = 0
let selectedProducts = new Set()

products.forEach(product => {
    let productItem = document.createElement('div')
    productItem.className = 'product-item'
    productItem.textContent = `${product.name} - ${product.price}`

    productItem.addEventListener('click', () => {
        if (selectedProducts.has(product.name)) {
            selectedProducts.delete(product.name)
            totalPrice -= product.price
            productItem.classList.remove('selected')
        } else {
            selectedProducts.add(product.name);
            totalPrice += product.price
            productItem.classList.add('selected')
        }
        updateSelectedProducts();
    })

    productContainer.appendChild(productItem)
})

function updateSelectedProducts() {
    selectedProductsDiv.innerHTML = Array.from(selectedProducts).join(', ')
    totalPriceDiv.textContent = `총액: ${totalPrice}원`
}

// 초기 총합 표시
totalPriceDiv.textContent = `총액: ${totalPrice}원`