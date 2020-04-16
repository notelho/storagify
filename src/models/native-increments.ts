import Storagify from "./storagify";

export interface NativeIncrements {

    list(instance: Storagify): string[];

    when(key: string, instance: Storagify): Date;

    start(instance: Storagify): string | null;

}

export default NativeIncrements;