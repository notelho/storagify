import Storagify from "../models/storagify";
import NativeBase from "../models/native-base";

export function getCalls(instance: Storagify): NativeBase {

    const native = instance["[[native]]"];

    return {

        setItem: function (key: string, value: any) {
            return native.setItem.call(instance, key, value);
        },

        getItem: function (key: string) {
            return native.getItem.call(instance, key);
        },

        removeItem: function (key: string) {
            return native.removeItem.call(instance, key);
        },

        clear: function () {
            return native.clear.call(instance);
        },

        key: function (index: number) {
            return native.key.call(instance, index);
        },

    };

}

export default getCalls;