function removeItem() {
    let allLi = document.querySelectorAll('#productsList li');
    allLi.forEach(li => {
        li.onclick = function() {
            this.parentNode.removeChild(this);
        }
    });
}

function addListElem() {
    let productName = document.productsForm.product.value;
    let productPrice = document.productsForm.price.value;

    let newLi = document.createElement('li');
    newLi.innerHTML = productName + ' - ' + productPrice + 'р. ';

    let delButton = document.createElement('input');
    delButton.type = 'button';
    delButton.value = 'Удалить';
    delButton.setAttribute('onclick', 'removeItem()');

    productsList.append(newLi);
    newLi.appendChild(delButton);
}