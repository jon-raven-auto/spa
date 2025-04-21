
import React, { useState, useEffect, useRef } from "react";
import './MultiSelect.css';

interface Option {
    label: string;
    value: string;
}

interface MultiSelectDropdownProps {
    options: Option[];
    label: string;
    value?: string[];
    onChange: (selected: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
    options,
    label,
    value = [],
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
    const [searchText, setSearchText] = useState("");

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle selection
    const handleCheckboxChange = (optionValue: string) => {
        const updatedOptions = selectedOptions.includes(optionValue)
            ? selectedOptions.filter((val) => val !== optionValue)
            : [...selectedOptions, optionValue];
        setSelectedOptions(updatedOptions);
        onChange(updatedOptions);
    };

    // Handle "Select All"
    const handleSelectAll = () => {
        const allValues = options.map((option) => option.value);
        setSelectedOptions(
            selectedOptions.length === options.length ? [] : allValues
        );
        onChange(
            selectedOptions.length === options.length ? [] : allValues
        );
    };

    // Filter options
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div ref={dropdownRef} className="multi-select-dropdown-container">
            <label className="multi-select-dropdown-label">{label}</label>
            <div
                className="multi-select-dropdown-header"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={selectedOptions.length > 0 ? 'placeholder-style-selected' : 'placeholder-style'}>
                    {selectedOptions.length
                        ? `${selectedOptions.join(', ')}`
                        : "Please select"}
                </span>
                {/* <img
          src={require("../assets/img/down-arrow.svg").default}
          className="multi-select-dropdown-arrow"
          alt="Arrow"
        /> */}
            </div>

            {isOpen && (
                <div className="multi-select-dropdown-options">
                    {/* Search */}
                    <div className="multi-select-dropdown-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="multi-select-dropdown-search-input"
                        />
                    </div>

                    {/* Select All */}
                    <div className="multi-select-dropdown-select-all">
                        <input
                            type="checkbox"
                            className="custom-checkbox"
                            checked={selectedOptions.length === options.length}
                            onChange={handleSelectAll}
                        />
                        <label className="multi-select-dropdown-select-all-label">Select All</label>
                    </div>

                    {/* Options */}
                    {filteredOptions.map((option) => (
                        <div
                            key={option.value}
                            className={`multi-select-dropdown-option ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
                        >
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                checked={selectedOptions.includes(option.value)}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                            <label className="multi-select-dropdown-option-label">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;