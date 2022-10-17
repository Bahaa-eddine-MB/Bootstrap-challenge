var productsList = [
    { "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/1/1.jpg"] },
    { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/2/1.jpg"] },
    { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/3/1.jpg"] },
    { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/4/1.jpg"] },
    { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/5/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/5/1.jpg"] },
    { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "APPle", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png", "images": ["https://dummyjson.com/image/i/products/6/1.png"] },
    { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/7/1.jpg"] },
    { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/8/1.jpg"] },
    { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/9/1.jpg"] }
]


productsList.map(item => {
    const element = document.createElement("div")
    element.setAttribute("id", "item-" + item.id)
    element.setAttribute("class", "mb-3 col-md-4")
    element.innerHTML = `<div class="border rounded border-2 border-primary h-100 p-3">
                                            <div class ="category fw-bold d-flex justify-content-center mb-3">${item.category}</div>

                    <div class="images d-flex justify-content-center">
                       <img src="${item.images}" width="100" class="rounded">
                    </div>

                    <div class="d-flex justify-content-between mt-3">
                        <p class="title fw-bold">${item.title}</p>
                        <div class ="price fw-bold">${item.price}$</div>
                    </div>
                    <p class="description"> ${item.description}</p>
                    <div class="d-flex justify-content-between mt-3">
                         <p class="rating fw-bold">Rating: ${item.rating}</p>
                        <div class ="stock fw-bold">Stock left: ${item.stock}</div>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
            <button type="submit" data-bs-toggle="modal"  class="btn btn-primary">
                Buy the product
            </button>
        </div>
                </div>`

    document.getElementById("items").appendChild(element)

})


const AddingItem = document.getElementById("addItem")

AddingItem.addEventListener("click", function(){ 
    console.log("yeeees")
    const element = document.createElement("div")
    const  title = document.getElementById("input1").value
    const  price = document.getElementById("input4").value
    const  description = document.getElementById("input2").value
    console.log(title)

    element.setAttribute("class", "mb-3 col-md-4")
    element.innerHTML = `<div class="border rounded border-2 border-primary h-100 p-3">
                    <div class="d-flex justify-content-between mt-3">
                        <p class="title fw-bold">${title}</p>
                        <div class ="price fw-bold">${price}$</div>
                    </div>
                    <p class="description"> ${description}</p>
                   
                    <div class="d-flex justify-content-center mt-3">
            <button type="submit" data-bs-toggle="modal"  class="btn btn-primary">
                Buy the product
            </button>
        </div>
                </div>`

    document.getElementById("items").appendChild(element)

});
