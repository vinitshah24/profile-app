export interface BlogItem {
    id: number;
    title: string;
    description: string;
    publish_date: Date;
    thumbnail: string;
    image: string;
    categories: string[];
}

export interface BlogData {
    title: string,
    description: string;
    items: BlogItem[];
}