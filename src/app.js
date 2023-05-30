let featured = [
    {
        id : 1,
        name : 'Xbox Series S controller',
        price : 1499.99,
        image : "https://i.postimg.cc/X7C6vVtn/controller.webp"
    },
    {
        id : 2,
        name : 'Huawei FreeBuds 4i',
        price : 1799.99,
        image : "https://i.postimg.cc/dVGF5q95/Huawei-Free-Buds-4i-11.jpg"
    },
    {
        id : 3,
        name : 'Samsung Duo Pad 15W',
        price : 994.99,
        image : "https://i.postimg.cc/02TxG676/EP-P5400-samsung-charger-01.webp"
    },
    {
        id : 4,
        name : 'Samsung Galaxy Watch4',
        price : 3299.99,
        image : "https://i.postimg.cc/wxb9v4vQ/101600187-C01-2.jpg"
    },
    {
        id : 5,
        name : 'Grand Theft Auto VI',
        price : 1899.99,
        image : "https://i.postimg.cc/xCXnyLpz/Fr7l5y-HXo-AA1z2-C.jpg"
    },
    {
        id : 6,
        name : 'Logitech G502 hero Mouse',
        price : 999.99,
        image : "https://i.postimg.cc/zvMNcvMc/10119430-b8c6.webp"
    },
]


let productBox = document.getElementById('productBox');
featured.forEach(( data ) => {
    productBox.innerHTML += `
    <div class="product col d-flex flex-column">
    <div class="my-3">
        <img src="${data.image}" class="img-thumbnail" alt="">
    </div>
        <div class="text-start">
            <p>
                ${data.name}
            </p>

            <p>
                R${data.price}
            </p>
        
        </div>
    </div>
    `
})


let brands = [
    {
        id: 1,
        name: 'Samsung',
        image: "https://i.postimg.cc/6q7Jnw3L/samsung.png",
    },
    {
        id: 2,
        name: 'Oppo',
        image: "https://i.postimg.cc/RFZzCwxY/oppo.png",
    },
    {
        id: 3,
        name: 'Intel',
        image: "https://i.postimg.cc/8cq8b3f8/intel.png",
    },
    {
        id: 4,
        name: 'Nvidia',
        image: "https://i.postimg.cc/TwNvKhR3/nvidia.png",
    },
    {
        id: 5,
        name: 'Asus',
        image: "https://i.postimg.cc/q70TY9b4/asus.png",
    },
    {
        id: 6,
        name: 'Skullcandy',
        image: "https://i.postimg.cc/SQ5pqXTZ/skullcandy.png",
    },
]

let brandBox = document.getElementById('brandBox');
brands.forEach((data) => {
    brandBox.innerHTML += `
        <div>
            <img src="${data.image}" alt="${data.name}" class="img-thumbnail">
        </div>
    `
})