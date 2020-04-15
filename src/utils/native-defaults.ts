// import Parsed from '../models/parsed';

// import describer from './describer';
// import parser from './parser';

export const nativeDefaults: any = {

    list: function () {

        const instance: Storage = this;

        const action: string = `Listing all keys in {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().list(instance);

        });

    },

    when: function (key: string) {

        const instance: Storage = this;

        const action: string = `Returning creation date of ${key} in {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().when(key, instance);

        });

    },

    getItem: function (key: string) {

        const instance: Storage = this;

        const action: string = `Returning value of ${key} in {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().get(key, instance);

        });

    },

    setItem: function (key: string, value: any) {

        const instance: Storage = this;

        const action: string = `Setting value of ${key} in {{instance}}..`;

        const parsed: Parsed = parser(value);

        return describer(instance, action, function () {

            return instance.worker().set(key, parsed, instance);

        });

    },

    removeItem: function (key: string) {

        const instance: Storage = this;

        const action: string = `Removing ${key} from {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().delete(key, instance);

        });

    },

    clear: function () {

        const instance: Storage = this;

        const action: string = `Cleaning {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().clear(instance);

        });

    },

    start: function () {

        const instance: Storage = this;

        const action: string = `Initializing {{instance}}..`;

        return describer(instance, action, function () {

            return instance.worker().start(instance);

        });

    }

}

export default nativeDefaults;