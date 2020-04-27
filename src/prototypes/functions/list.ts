import * as defaults from '../../utils/default-configuration';
import returner from "../../utils/returner";
import getWorker from "../../utils/get-worker";

export const list = {

    name: "list",

    function: function (): string[] {

        const instance = <any>this;

        const action: string = `Listing all keys in ${defaults.describeKey}..`;

        return returner(instance, action, function () {
            return getWorker(instance).list(instance);
        });

    }

}