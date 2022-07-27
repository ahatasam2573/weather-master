import React from "react";
import './TopButton.css'

function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: "Switzerland",
        },
        {
            id: 2,
            title: "Canada",
        },
        {
            id: 3,
            title: "Tokyo",
        },
        {
            id: 4,
            title: "Sylhet",
        },
        {
            id: 5,
            title: "Paris",
        },
    ];

    return (
        <div className="flex items-center justify-around my-6 heading-div">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium city-name"
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;