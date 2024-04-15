import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'


library.add(fas);

const RandomIcons = () => {

    const [randomIcon, setRandomIcon] = useState(null);

    const handleButtonClick = () => {
        setTimeout(() => {
            const iconNames = Object.keys(library.definitions.fas);
            const randomIndex = Math.floor(Math.random() * iconNames.length);
            setRandomIcon(iconNames[randomIndex]);
        }, 3000)

    };

    return (
        <div className="content">
            <div>
                <button onClick={handleButtonClick}>random</button>
                <div>
                    {randomIcon && <FontAwesomeIcon icon={randomIcon} className='icon' />}
                </div>
            </div>
        </div>
    );
};

export default RandomIcons;
