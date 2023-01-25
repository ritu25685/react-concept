
import "./Rendering.css";

export const Rendering = () => {
    let fruitObject=[
        {
            name:"Apple",
            image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
            price:25
        },
        {
            name:"Banana",
            image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            price:30
        },
        {
            name:"Grapes",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            weight: 0.1,
            price:10
        }
    ]
    const renderFruit=()=>{
        let renderedFruits=fruitObject.map((value,index)=>{
            return <div className="card-container">
                <div className="image-container">
                    <img src={value.image} alt={"image-of-"+value.name} />
                </div>
                <div className="bottom-container">
                    <div className="name-conatiner">
                        {value.name}

                    </div>
                    <div className="price-container">
                        {value.price}

                    </div>
                </div>
            </div>
        })
        return<div className="cards-container">{renderedFruits}</div>
    }
  return (
    <div>{renderFruit()}</div>
  )
}