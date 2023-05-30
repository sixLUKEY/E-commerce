//! https://postimg.cc/gallery/fwGDJbV
// Postit link


let gamingProducts = [
    {
        id: 1,
        name: 'Xbox Series S',
        price: 6499.99,
        image: 'https://i.postimg.cc/ZYdn3hd5/0b2854b9-a7e7-47dd-b4f8-a371567854b2-ecommerce-9fa7.png'
    },
    {
        id: 2,
        name: 'Xbox Series Controller - White',
        price: 1499.99,
        image: 'https://i.postimg.cc/X7C6vVtn/controller.webp'
    },
    {
        id: 3,
        name: 'Xbox Series Controller - Black',
        price: 1499.99,
        image: 'https://i.postimg.cc/NMVtFL4k/53116177-800-800.png'
    },
    {
        id: 4,
        name: 'Razer Kraken X Console-Wired',
        price: 799.99,
        image: 'https://i.postimg.cc/bvypF7rk/53105720-800-800.png'
    },
    {
        id: 5,
        name: 'Razer Basilisk V3 Pro Gaming Mouse',
        price: 1299.99,
        image: 'https://i.postimg.cc/gcXXDZfd/rz01-04000100-r3m1-1.jpg'
    },
    {
        id: 6,
        name: 'Razer OrnataV3 Gaming Keyboard',
        price: 999.99,
        image: 'https://i.postimg.cc/C1dYwbjK/53138374-800-800.png'
    },
    {
        id: 7,
        name: 'Grand Theft Auto VI',
        price: 1899.99,
        image: 'https://i.postimg.cc/xCXnyLpz/Fr7l5y-HXo-AA1z2-C.jpg'
    },
    {
        id: 8,
        name: 'Xbox Live Gold - 12 Months',
        price: 599.99,
        image: 'https://i.postimg.cc/YSdMcdLV/4251404573577-zoom.jpg'
    },
]

let gamingBox = document.getElementById('gamingBox');
gamingProducts.forEach((data) => {
    gamingBox.innerHTML +=`
    <div class="product col d-flex flex-column align-items-center">
    <div class="my-3">
        <img src="${data.image}" class="img-thumbnail gaming" alt="">
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
    `})


let smartphoneProducts = [
    {
        id: 1,
        name : 'Samsung Galaxy Watch4',
        price : 3299.99,
        image : "https://i.postimg.cc/wxb9v4vQ/101600187-C01-2.jpg"
    },
    {
        id: 2,
        name : 'Samsung Duo Pad 15W',
        price : 994.99,
        image : "https://i.postimg.cc/02TxG676/EP-P5400-samsung-charger-01.webp"
    },
    {
        id: 4,
        name: 'Samsung Galaxy Buds Pro',
        price: 2999.99,
        image: "https://i.postimg.cc/vTVsVM2F/21242-product-image1000x1000png.png"
    },
    {
        id: 3,
        name : 'Huawei FreeBuds 4i',
        price : 1799.99,
        image : "https://i.postimg.cc/dVGF5q95/Huawei-Free-Buds-4i-11.jpg"
    },
    {
        id: 5,
        name: 'Xiaomi Redmi Buds 3 Pro',
        price: 1399.99,
        image: "https://i.postimg.cc/W16s8NNs/bhr5244gl-hr-01-03cb.jpg"
    },
    {
        id: 6,
        name: 'USB type-C to HDMI converter',
        price: 699.99,
        image: "https://i.postimg.cc/HkHrdPjs/900124-pers-view-shade-1d6e.jpg"
    },
    {
        id: 7,
        name: 'Volkano Bazooka',
        price: 499.99,
        image: "https://i.postimg.cc/nVgVcSSf/Volkano.jpg"
    },
    {
        id: 8,
        name: 'Volkano Anaconda',
        price: 1799.99,
        image: "https://i.postimg.cc/ZqsnPbHC/vk-3412-b-volkanox-anaconda-bluetooth-speaker-4-3.jpg"
    },
]

let smartphoneBox = document.getElementById('phoneBox');
smartphoneProducts.forEach((data) => {
    smartphoneBox.innerHTML +=`
    <div class="product col d-flex flex-column align-items-center">
    <div class="my-3">
        <img src="${data.image}" class="img-thumbnail gaming" alt="">
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

let computerProducts = [
    {
        id: 1,
        name : 'Logitech G502 hero Mouse',
        price : 999.99,
        image : "https://i.postimg.cc/zvMNcvMc/10119430-b8c6.webp"
    },
    {
        id: 2,
        name: 'Logitech G305 Lightspeed Mouse',
        price: 1099.99,
        image: "https://i.postimg.cc/8CwJK8dr/53509834-800-800.png"
    },
    {
        id: 3,
        name: 'Volkano Crystal Series',
        price: 99.99,
        image: "https://i.postimg.cc/zGZg3FX3/Mouse.webp"
    },
    {
        id: 4,
        name: 'Graphite Mouse Pad',
        price: 299.99,
        image: "https://i.postimg.cc/JzNBXHGx/956-000049-80fd.jpg"
    },
    {
        id: 5,
        name: 'Volkano Wireless Package',
        price: 499.99,
        image: "https://i.postimg.cc/266qgHT9/52209910-800-800.png"
    },
    {
        id: 6,
        name: 'Logitech G413 Mechanical',
        price: 1499.99,
        image: "https://i.postimg.cc/43XHQ4cg/53492650-800-800.png"
    },
    {
        id: 7,
        name: 'Intel core i9-13900K 13th Gen',
        price: 14999.99,
        image: "https://i.postimg.cc/pXnj26vg/bx8071513900k-cpu-processors-35063254319268-500x.webp"
    },
    {
        id: 8,
        name: 'MSI GeForce RTX 4080',
        price: 25299.99,
        image: "https://i.postimg.cc/NMzyt1zs/RTX-4080-16-GB-VENTUS-3-XOC-768x768.png"
    },
]

let computerBox = document.getElementById('computerBox');
computerProducts.forEach((data) => {
    computerBox.innerHTML +=`
    <div class="product col d-flex flex-column align-items-center">
    <div class="my-3">
        <img src="${data.image}" class="img-thumbnail gaming" alt="">
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
