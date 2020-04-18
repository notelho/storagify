import Storagify from "./storagify";

export interface NativeIncrements {

    list(instance: Storagify): string[];

    when(instance: Storagify, key: string): Date;

    start(instance: Storagify): string | null;

}

export default NativeIncrements;