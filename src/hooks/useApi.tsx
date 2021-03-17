import { useEffect, useState } from 'react';

export function useMovieApi<T>(query: string): { response: any; error: any; loading: boolean } {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
    const [response, setResponse] = useState<object[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {

                const res = await fetch(url);
                const data = await res.json();

                if (data.Error) {
                    setError(data.Error);
                }
                setResponse(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url]);

    return { response, error, loading };
}

export default useMovieApi;
