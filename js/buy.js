const topPriceParagraph = document.querySelector('.js_price');
const topBlock = document.querySelector('.js_form__title-box');
const headphonesBlock = document.querySelector('.js_total');
const additionalBlock = document.getElementById('silicone_case');
const additionalInput = document.querySelector('.js_additional');
const total = document.getElementById('total_1');
const totalBlock = document.querySelector('.js_total_1');
const terms = document.getElementById('terms');
const bottomHeadphonesPrice = document.getElementById('terms_price');
const bottomAdditionalPrice = document.getElementById('express_terms');
const bottomTotalPrice = document.getElementById('total_2');
const submitBtn = document.getElementById('place_order');
const errorMessage = document.querySelector('.js_error-message');
const quantityInput = document.querySelector('.js_quantity');
const headphonesPrice = document.getElementById('chosen_price');
const prevQuantityBtn = document.querySelector('.js_quantity_prev');
const nextQuantityBtn = document.querySelector('.js_quantity_next');
const bottomQuantity = document.querySelector('.js_bottom-quantity');

const defaultText = topPriceParagraph.textContent;


const amountOfProduct = 12;
const additionalProductPrice = 5.95;

// HIDE START
errorMessage.style.display = 'none';
topBlock.style.display = 'none';
headphonesBlock.style.display = 'none';
additionalBlock.style.display = 'none';
terms.style.display = 'none';
submitBtn.style.display = 'none';
totalBlock.style.display = 'none';
bottomAdditionalPrice.style.display = 'none';
// HIDE END
quantityInput.addEventListener('input', changeQuantity);
additionalInput.addEventListener("change", chackedAdditionalInput);
prevQuantityBtn.addEventListener('click', increaseQuantity);
nextQuantityBtn.addEventListener('click', decreaseQuantity);
let quantity = 0;

function increaseQuantity(e) {
    if(Number(quantityInput.value) === 0) {
        e.currentTarget.classList.add('btn-disable');
        nextQuantityBtn.classList.remove('btn-disable');
    } else {
        quantityInput.value = Number(quantityInput.value) - 1;
        nextQuantityBtn.classList.remove('btn-disable');
    }
    changeQuantity(quantityInput.value);
}

function decreaseQuantity(e) {
    if(Number(quantityInput.value)  === amountOfProduct) {
        e.currentTarget.classList.add('btn-disable');
        prevQuantityBtn.classList.remove('btn-disable');
    } else {
        quantityInput.value = Number(quantityInput.value) + 1;
        prevQuantityBtn.classList.remove('btn-disable');
    }
    changeQuantity(quantityInput.value);
}

function chackedAdditionalInput(e) {
    const checked = e.target.checked;
    if(checked && quantity === 0) {
        additionalBlock.style.display = 'flex';
        topBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        submitBtn.style.display = 'block';
        terms.style.display = 'flex';
        total.textContent = `$ ${additionalProductPrice}`;
        bottomHeadphonesPrice.style.display = 'none';
        bottomAdditionalPrice.style.display = 'inline-block';
        bottomTotalPrice.textContent = `$ ${additionalProductPrice}`;
    } else if (!checked && quantity === 0) {
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'none';
        totalBlock.style.display = 'none';
        submitBtn.style.display = 'none';
        terms.style.display = 'none';
    } else if(checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        additionalBlock.style.display = 'flex';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        total.textContent = `$ ${(((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100).toFixed(2)}`;
        bottomTotalPrice.textContent = `$ ${(((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100).toFixed(2)}`;
        bottomAdditionalPrice.style.display = 'inline-block';
    } else if(!checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        total.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomTotalPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomAdditionalPrice.style.display = 'none';
    }
}

function changeQuantity(e) {
    // const quantity = Number(e.target.value);
    if(e.target) {
        quantity = Number(e.target.value);
        bottomQuantity.textContent = Number(e.target.value);
       
    } else {
        quantity = Number(e);
        bottomQuantity.textContent = Number(e);
      
    }
    enterMoreThanThereIs(quantity);
    setTopTitle(quantity);
    showBottomBlocks(quantity);
}

function showBottomBlocks(quantity) {
    if(additionalInput.checked && quantity > 0 && quantity <= amountOfProduct) {
        additionalBlock.style.display = 'flex';
        bottomHeadphonesPrice.style.display = 'inline-block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        total.textContent = `$ ${(((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100).toFixed(2)}`;
        bottomTotalPrice.textContent = `$ ${(((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100).toFixed(2)}`;
        bottomAdditionalPrice.style.display = 'inline-block';
    } else if(!additionalInput.checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        total.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomTotalPrice.textContent = `$ ${priceAmount(quantity).toFixed(2)}`;
        bottomAdditionalPrice.style.display = 'none';
    } else if(additionalInput.checked && quantity === 0) {
        bottomHeadphonesPrice.style.display = 'none';
        additionalBlock.style.display = 'flex';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'none';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        total.textContent = `${additionalProductPrice.toFixed(2)}`;
        bottomAdditionalPrice.style.display = 'none';
    } else if(!additionalInput.checked && quantity === 0) {
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'none';
        headphonesBlock.style.display = 'none';
        totalBlock.style.display = 'none';
        terms.style.display = 'none';
        submitBtn.style.display = 'none';
    }
}

function priceAmount(value) {
    switch(value) {
        case 0:  
        return 0; 
        case 1:  
        return 19.99;  
        case 2: 
        return 24.99;
        case 3:
        return 35.32;
        case 4:
        return 39.99;
        case 5:
        return 43.98;
        case 6:  
        return 49.95;
        case 7:
        return 69.99;
        case 8:
        return 79.99;
        case 9:
        return 84.41;
        case 10:
        return 89.99;
        case 11:
        return 109;
        case 12:
        return 119;
    }
}

function setTopTitle(quantity) {
    if(typeof quantityLabelOptions(quantity) === 'string' && quantity > 0) {
        topPriceParagraph.textContent = quantityLabelOptions(quantity);
    } else if(typeof quantityLabelOptions(quantity) === 'string') {
        topPriceParagraph.textContent = quantityLabelOptions(quantity);
    } else if(typeof quantityLabelOptions(quantity) === 'object') {
        const title = quantityLabelOptions(quantity).title;
        topPriceParagraph.textContent = title;
    }
}


function quantityLabelOptions(quantity) {
    switch(quantity) {
        case 0:  
        return defaultText; 
        case 1:  
        return '1 pack for $19.99';  
        case 2: 
        return {
          title: '2 Packs for $24.99',
        };
        case 3:
        return {
            title: '3 Packs for $35.32',
        };
        case 4:
        return {
            title: '4 Packs for $39.99',
        };
        case 5:
        return {
            title: '5 Packs for $43.98',
        };
        case 6:  
        return {
            title: '6 Packs for $49.95',
        };
        case 7:
        return {
            title: '7 Packs for $69.99',
        };
        case 8:
        return {
            title: '8 Packs for $79.99',
        };
        case 9:
        return {
            title: '9 Packs for $84.41',
        };
        case 10:
        return {
            title: '10 Packs for $89.99',
        };
        case 11:
        return {
            title: '11 Packs for $109',
        };
        case 12:
        return {
            title: '12 Packs for $119',
        };
    }
}

function enterMoreThanThereIs(quantity) {
    if(quantity > amountOfProduct) {
        errorMessage.style.display = 'block';
        topPriceParagraph.textContent = defaultText;
    } else {
        errorMessage.style.display = 'none';
    }
}



