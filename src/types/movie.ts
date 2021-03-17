export interface IMovieApi {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface IApiSuccessResponse {
    Error?: string;
    Response: string;
    Search?: Array <IMovieApi>;
    totalResults?: string;
}

export interface IApiResponse {
    error?: string;
    loading: boolean;
    response: IApiSuccessResponse;
}
