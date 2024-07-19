 fetch("https://dummyjson.com/products")
        .then(value1 => value1.json()) 
        .then((value2) => {
            const productContainer = document.getElementById('product-container');
            value2.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('col-md-4', 'mb-4');
                productDiv.innerHTML = `
                    <div class="card" style="width: 100%;">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        </div>
                    </div>
                `;
                productContainer.appendChild(productDiv);
            });
        });

