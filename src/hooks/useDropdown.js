import { useState } from 'react';

function useDropdown() {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);

    const handleDropdownChoose = (name, value) => {
        toggleDropdown();
        console.log(name, value);
    };

    return { open, toggleDropdown, handleDropdownChoose };
}

export default useDropdown;
