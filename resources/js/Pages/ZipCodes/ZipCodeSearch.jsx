import React, { useState } from "react";

export default function ZipCodeSearch({ props }) {
    const [search, setSearch] = useState("");
    return (
        <div>
            <div>
                <InputLabel htmlFor="zip_code_search" value="Zip Code Search" />
                <TextInput
                    id="zip_code_search"
                    name="zip_code_search"
                    value={search}
                    className="mt-1 block w-full"
                    autoComplete="zip_code_search"
                    isFocused={true}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />
            </div>
        </div>
    );
}
