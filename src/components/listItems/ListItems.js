import React from "react";


const ListItems = () => {
    const ListSneakers = [{
        id: 1,
        product: "sneaker",
        price: "145.99",
        size: "P",
        src: "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-mid-554724-096-1-11628865979.jpg"
    }
        , {
        id: 2,
        product: "sneaker",
        price: "249.99",
        size: "M",
        src: "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-low-se-DH6931-102-1-11638985858.jpg"
    },
    {
        id: 3,
        product: "sneaker",
        price: "400.00",
        size: "G",
        src: "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-mid-masculino-554724-660-1-11655137657.jpg"
    }
    ]

    return (

        ListSneakers.map(res =>

            <div className="container-items">
                <img src={res.src} />
            </div>)

    )
}
export default ListItems;
