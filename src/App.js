import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id : 1,
        name: "Kimchi",
        image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
        rating: 5
    },
    {
        id : 2,
        name: "bulgogi",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
        rating: 4.9
    },
    {
        id : 3,
        name: "kimbap",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/02/21/f34c2f0fcd67513941d683d90050f3c01.jpg",
        rating: 4.8
    },
    {
        id : 4,
        name: "samgyetang",
        image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
        rating: 4
    }
]

function Food({name, picture, rating}) {
    return (
        <div>
            <h1>I Like {name}</h1>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

function App() {
    return (
        <div className="App">
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}

export default App;

