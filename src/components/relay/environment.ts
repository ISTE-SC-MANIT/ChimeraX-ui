import cookie from "js-cookie";

import { Environment, RecordSource, Store } from "relay-runtime";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware,
    errorMiddleware,
  
} from "react-relay-network-modern";


export const makeEnvironment = () => {
    const token = cookie.get("token");

    

    const network = new RelayNetworkLayer(
        [
            urlMiddleware({
                url: () => Promise.resolve(`${process.env.NEXT_PUBLIC_BACKEND}/graphql`)
            }),
            authMiddleware({
                token: token,
                prefix: "",
                // default
                header: "authorization"
            }),
            errorMiddleware({
                logger: console.error,
                prefix: "[Relay Network]: "
            })
        ],
        
    );
    return new Environment({
        network: network,
        store: new Store(new RecordSource())
    });
};