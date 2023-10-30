import { useState, useEffect, useCallback } from "react";


function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : initialValue
    })

    const setValue = useCallback((value)=>{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key])
    
    const removeValue = useCallback(()=>{
        window.localStorage.removeItem(key)
    }, [key])

    return {storedValue, setValue, removeValue}
}

export default useLocalStorage