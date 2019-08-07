export interface Article {
    id: string;
    title: string;
    shortDescription: string;
    smallImage: string;
    rating: number;
    ratingCount: number;
}

export interface FullArticle {
    id: string;
    content: string;
    bigImage: string;
}