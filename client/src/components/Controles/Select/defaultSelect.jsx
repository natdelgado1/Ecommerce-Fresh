import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DefaultSelect = ({options, name, id, onChange, value, defaultOption}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value) => {
        onChange(value);
        setIsOpen(false);
    }

    return (
        <div className="relative flex gap-4 items-center w-40">
            <button onClick={() => setIsOpen(!isOpen)} className="flex h-9 w-full rounded-md border border-input justify-between bg-transparent px-3 py-1 text-sm shadow-sm transition-colors items-center gap-2 file:border-0 file:bg-transparent file:text-sm file:font-medium text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                {value || defaultOption}
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isOpen && (
                <div className="absolute w-full mt-12 top-0 rounded shadow bg-white">
                    <div key={-1} onClick={() => handleSelect("")} className={`px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center ${value === "" ? 'text-muted-foreground' : ''}`}>
                       
                        {defaultOption}
                    </div>
                    {options.map((option, index) => (
                        <div key={index} onClick={() => handleSelect(option)} className={`px-2 py-1 hover:bg-gray-200 cursor-pointer flex gap-2 items-center  ${value === option ? 'text-muted-foreground border-s-2 border-muted-foreground' : ''}`}>
                          
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DefaultSelect;