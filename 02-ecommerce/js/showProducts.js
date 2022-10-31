import { products } from "./products";

const $ = element => document.querySelector(element);

function createNodeOnDom(src, description, name, price) {
    const product = document.createElement('div');
    const image = document.createElement('img');
    const descriptionProduct = document.createElement('div');
    const productParagraph = document.createElement('p');
    const productName = document.createElement('h3');
    const priceSpan = document.createElement('span');
    const pricesDiv = document.createElement('div');
    const priceParagraph = document.createElement('p');
    const newPrice = document.createElement('p');

    product.setAttribute('class', 'product-card');
    descriptionProduct.setAttribute('class', 'description-product');
    priceParagraph.setAttribute('class', 'old-price');
    newPrice.setAttribute('class', 'new-price');

    image.src = src;
    productParagraph.innerHTML = description;
    productName.innerHTML = name;
    priceParagraph.innerHTML = `${price}$`;
    newPrice.innerHTML = `${ price - 3 }$`;

    pricesDiv.appendChild(priceParagraph);
    pricesDiv.appendChild(newPrice);

    priceSpan.appendChild(pricesDiv);
    priceSpan.appendChild(productParagraph);

    descriptionProduct.appendChild(productName);
    descriptionProduct.appendChild(priceSpan);
    
    product.appendChild(image);
    product.appendChild(descriptionProduct);

    return product
}

products.map(({ src, description, name, price }) => {
    $('.products-grid').appendChild(createNodeOnDom(src, description, name, price))
})