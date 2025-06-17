import { useEffect, useState } from "react";


const useFetch =<T>(fetchFunction: ()=>Promise<T>, autoFetch = true)=>{
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };
    const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
}
useEffect(() => {
    if (autoFetch) {
        fetchData();
    }
},[]);
    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;
