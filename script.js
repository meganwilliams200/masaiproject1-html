document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const priceGraph = document.getElementById('priceGraph');
    const ratingGraph = document.getElementById('ratingGraph');
    const sortPriceButton = document.getElementById('sortPrice');
    const sortRatingButton = document.getElementById('sortRating');

    let products = [];

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const rating = parseFloat(document.getElementById('productRating').value);

        products.push({ name, price, rating });
        productForm.reset();
        updateGraphs();
    });

    sortPriceButton.addEventListener('click', () => {
        products.sort((a, b) => a.price - b.price);
        updateGraphs();
    });

    sortRatingButton.addEventListener('click', () => {
        products.sort((a, b) => a.rating - b.rating);
        updateGraphs();
    });

    function updateGraphs() {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        const maxPrice = Math.max(...products.map(p => p.price), 1);
        const maxRating = Math.max(...products.map(p => p.rating), 1);

        products.forEach((product, index) => {
            const priceBar = document.createElement('div');
            priceBar.className = 'bar';
            priceBar.style.width = ${(product.price / maxPrice) * 100}%;
            priceBar.style.left = ${index * 50}px;
            priceBar.textContent = ${product.price};
            priceGraph.appendChild(priceBar);

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar';
            ratingBar.style.width = ${(product.rating / maxRating) * 100}%;
            ratingBar.style.left = ${index * 50}px;
            ratingBar.textContent = ${product.rating};
            ratingGraph.appendChild(ratingBar);
        });
    }
});