import { products } from "./products";

const $ = element => document.querySelector(element);

function createNodeOnDom(src, description, name) {
    const product = document.createElement('div');
    const image = document.createElement('img');
    const descriptionProduct = document.createElement('div');
    const productParagraph = document.createElement('p');
    const productName = document.createElement('h3');

    product.setAttribute('class', 'product-card');
    descriptionProduct.setAttribute('class', 'description-product');

    image.src = src;
    productParagraph.innerHTML = description;
    productName.innerHTML = name;

    descriptionProduct.appendChild(productName);
    descriptionProduct.appendChild(productParagraph);
    
    product.appendChild(image);
    product.appendChild(descriptionProduct);

    return product
}

products.map(({ src, description, name }) => {
    $('.products-grid').appendChild(createNodeOnDom(src, description, name))
})