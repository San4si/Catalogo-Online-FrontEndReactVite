import "./card.css"

interface CardProps {
    price: number,
    title: string,
    description: string,
    image: string
}

export function Card({price, image, title, description} : CardProps){
    return(
        <div className="card">
        <img src={image}/>
        <h2>{title}</h2>
        <p><b>Preço:</b>{price}</p>
        <p><b>Descrição: </b>{description}</p>
        </div>
    )
}