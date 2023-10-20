import { useState, useEffect } from "react";

function isMobileView(){
    const [width, setWidth] = useState(window.innerWidth);
    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    return width <= 768;
}

export default isMobileView