import * as eachConfig from '../utils/each-config';
import * as eachActions from '../utils/each-actions';
import * as eachStorage from '../utils/each-storage';
import Storagify from "./storagify";
import NonPublic from "./non-public";
import Parser from "./parser";
import getCalls from '../utils/get-calls';
import getType from "../utils/get-type";
import getEnv from "../utils/get-env";

export class Configurator {

    constructor() { }

    public start(instance: Storagify): string {

        // const parser = new Parser();
        // const nonPublic = new NonPublic();
        // const calls = getCalls(instance);
        // const name = nonPublic.name;
        // const key = nonPublic.encoder.hash('__config');

        // let config: any = calls.getItem(key)

        // if (config) {

        //     config = nonPublic.encoder.decode(config);

        //     config = parser.parse(config);

        //     // pra cada registro na config verifica se a chave existe no storage
        //     // se não existir, deleta na config
        //     config = eachConfig.checkIfKeyExists(instance, config, false, eachActions.deleteFromConfig);

        //     //     pra cada registro no storage verifica se existe a chave na config
        //     //         se não existir, cria com um date now
        //     // }
        //     config = eachStorage.checkIfKeyExists(instance, config, false, eachActions.createNewItem);

        //     // sobrescreve o env com o novo

        //     //     verifica  se a chave é a mesma , se for retorna o warn
        //     //  'Using an encryption key other than the previous one can cause problems.'


        // } else {

        //     config = { its: [], env: getEnv(instance) }

        //     // vou precisar de um hash() diferente que de pra converter de volta

        //     // criar um is no hash pra verificar se a chave com o hash tem __storagify__

        //     /*
        //     // cria o config com todas as chaves do storage e timestamp zerados
        //         pra cada item no storage, for {

        //             its =  [

        //                 {

        //                     n: defaults.ItemName;

        //                     t: defaults.ItemTimestamp;

        //                 }

        //             ]

        //             if ( encoder.is(key) ) {

        //                 item = get item

        //                 config.  its . push ( n : item.key , t : new Date().getTime() )

        //                 decoded key = decode ( key )

        //                 decoded value = decode ( value )

        //                 set item ( item )

        //             } 

        //         }

        //     */



        //     //         return new Array(isntance.length( ))
        //     //             .fill(false)
        //     //             .map((v, i) => i)
        //     //             .map((v) => calls.key(v))
        //     //             .map((v) => v = v.replace(consts.devkey, ''))




        // }



        return `${getType(instance)} storagify started successfully.`;

    }

    public update(instance: Storagify, key: string, value: string, timestamp: number): void {

        // do check

        const nonPublic = new NonPublic();

    }

    public when(instance: Storagify, key: string): Date {

        // do check


        return new Date()
    }

    public docheck() {

        // verifica se existe o __config

        // se não existir, redireciona pro start

    }

}

export default Configurator;