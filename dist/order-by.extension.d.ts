export {};
declare global {
    interface Array<T> {
        orderBy(selector: (item: T) => any | ((item: T) => any)[], order?: 'ASC' | 'DESC'): T[];
    }
}
