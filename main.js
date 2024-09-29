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
let payButton = document.getElementById('payButton')

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
            selectedProducts.add(product.name)
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

payButton.addEventListener('click', () => {
    if (selectedProducts.size === 0) {
        alert('선택된 상품이 없습니다.')
        return;
    }

    let paymentWindow = window.open('', '결제', 'width=600,height=200');
    paymentWindow.document.write(`
        <h3>결제창</h3>
        <p>총액: ${totalPrice}원을 결제하겠습니다.</p>
        <p>신용카드 번호를 입력 후 결제 버튼을 눌러주세요.</p>
        <input type="text" placeholder="신용카드 번호" id="cardNumber" /><br/>
        <button id="confirmPayment">결제</button>
    `);

    // paymentWindow.document.close()

    paymentWindow.document.getElementById('confirmPayment').addEventListener('click', () => {
        let cardNumber = paymentWindow.document.getElementById('cardNumber').value
        if (cardNumber) {
            alert(`${cardNumber}로 ${totalPrice}원이 결제 완료되었습니다.`)
            paymentWindow.close()
        } else {
            alert('신용카드 번호를 입력하세요.')
        }
    })
})

            
// 초기 총합 표시
totalPriceDiv.textContent = `총액: ${totalPrice}원`