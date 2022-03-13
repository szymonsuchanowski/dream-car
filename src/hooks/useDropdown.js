import { useState } from 'react';

function useDropdown() {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);

    return { open, toggleDropdown };
}

export default useDropdown;
