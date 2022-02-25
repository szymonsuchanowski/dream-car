import { useState } from 'react';

function useSwitch(switchValue) {
    const [isOn, setIsOn] = useState(switchValue);

    const toggleSwitch = () => setIsOn(!isOn);

    return { isOn, toggleSwitch };
}

export default useSwitch;
