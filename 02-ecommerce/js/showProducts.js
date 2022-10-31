import { products } from "./products";

const $ = element => document.querySelector(element);

function createNodeOnDom(src, description) {
    const product = document.createElement('div');
    const image = document.createElement('img');
    const descriptionProduct = document.createElement('p');

    product.setAttribute('class', 'product-card');

    image.src = src;
    descriptionProduct.innerHTML = description;

    product.appendChild(image);
    product.appendChild(descriptionProduct);

    return product
}

products.map( ({ src, description }) => {
    $('.products-grid').appendChild(createNodeOnDom(src, description))
})