import StorageOptions from "./storage-options";

export interface StorageEnvironment {

    key: string;

    devkey: string;

    options: StorageOptions;

}

export default StorageEnvironment;