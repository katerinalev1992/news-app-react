import { Article } from "./Article";

export interface StoreStructure {
    articles: Article[];
    read: Article[];
    favorite: Article[];
    withComplains: Article[];
}