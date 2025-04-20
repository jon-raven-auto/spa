import { useState } from "react";
import { MultiSelect } from "../components";


function Home() {
    const options = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "grape", label: "Grape" },
        { value: "orange", label: "Orange" },
    ];

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <>
            <h1>Home Page</h1>

            <div style={{ padding: "20px" }}>
                <h4>Multi-Select Dropdown</h4>
                <MultiSelect
                    options={options}
                    label="Choose Options"
                    value={selectedValues}
                    onChange={(values) => setSelectedValues(values)}
                />
            </div>
        </>
    );
}

export default Home;