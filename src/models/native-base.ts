export interface NativeBase {

    setItem(key: string, value: any): void;

    getItem(key: string): string;

    removeItem(key: string): void;

    clear(): void;

    key(index: number): string | null;

}

export default NativeBase;