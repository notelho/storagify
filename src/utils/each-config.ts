// import * as eachActions from './each-actions';
// import Storagify from "../models/storagify";
// import ConfigurationStorage from "../models/configuration-storage";
// import getConfiguration from "./get-configuration";
// import getCalls from "./get-calls";

// export function checkIfKeyExists(

//     instance: Storagify,

//     config: ConfigurationStorage,

//     trueAction: eachActions.EachActionType | false,

//     falseAction: eachActions.EachActionType | false,

// ): ConfigurationStorage {

//     const len = config.its.length;

//     for (let i = 0; i < len; i++) {

//         const calls = getCalls(instance);
//         const { name } = getConfiguration(config, i);
//         const item = calls.getItem(name);
//         const args = { config, index: i };

//         if (item && trueAction) {
//             config = trueAction(args);
//         } else if (!item && falseAction) {
//             config = falseAction(args);
//         }
//     }

//     return config;
// }