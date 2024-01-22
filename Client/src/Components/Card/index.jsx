import React from 'react'
import './index.scss'
const Card = ({ image, text, price, imagetwo, author }) => {
    return (
        <>
            <div className="CardArea">
                <div className="CardBox">
                    <div className="Carddio">
                        <div className="ImgCard">
                            <img src={image} alt="" />
                           
                        </div>
                        <div className="CardText">
                             <h1>{text}</h1>
                        </div>
                    </div>

                    <div className="CardMinibox">
                        <div className="Img2">
                            <img src={imagetwo} alt="" />
                        </div>
                        <div className="Aouthor">
                            {/* <h3>{author}</h3> */}
                        </div>
                        <div className="price">
                            <h1>${price}</h1>
                        </div>
                        <div className="Icon">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
