import { getClient } from "@/lib/client"
import { gql } from "@apollo/client";

import styles from './apollo.module.css'

const query = gql`query Now {
    now(id: "1")
}`;

const endpoint = "https://main--time-pav6zq.apollographos.net/graphql"

export default async function Page() {
    // fetch via Server Component
    const { data } = await getClient(endpoint).query({ query });

    return <main className={styles.wrap}>Via Apollo client: {data.now}</main>;
}
