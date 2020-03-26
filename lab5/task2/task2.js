let total = 0;

function removeItem() {
    let allLi = document.querySelectorAll('#productsList li');
    allLi.forEach(li => {
        li.onclick = function() {
            total -= parseInt(this.getElementsByTagName('span')[0].textContent, 10);
            this.parentNode.removeChild(this);
        }
    });
}

function addListElem() {
    let productName = document.productsForm.product.value;
    let productPrice = document.productsForm.price.value;
    total += parseInt(productPrice, 10);

    let newSpanPrice = document.createElement('span');
    newSpanPrice.innerHTML = productPrice;

    let newLi = document.createElement('li');
    newLi.innerHTML = productName + ' - ';
    newLi.appendChild(newSpanPrice);
    newLi.innerHTML += 'р. '

    let delButton = document.createElement('input');
    delButton.type = 'button';
    delButton.value = 'Удалить';
    delButton.setAttribute('onclick', 'removeItem()');

    productsList.append(newLi);
    newLi.appendChild(delButton);
}

function totalAmount() {
    totalField.value = total + 'р.';
}