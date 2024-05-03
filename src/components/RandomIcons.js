import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RandomIcons.css'

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
            <button data-testid="random-icon-button" onClick={handleButtonClick}>Показать случайную иконку</button>
            {randomIcon && <FontAwesomeIcon data-testid="random-icon" icon={randomIcon} style={{ fontSize: '3em', marginTop: '10px' }} />}
        </div>
    );
};

export default RandomIcons;
