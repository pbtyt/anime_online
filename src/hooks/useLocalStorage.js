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

    return {storedValue, setValue}
}

export default useLocalStorage