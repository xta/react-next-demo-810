"use client";

// streaming SSR rendering
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";

import styles from "./client.module.css"

const query = gql`query Now {
    now(id: "1")
}`;

export default function Page() {
    // Client components query
    const { data } = useSuspenseQuery(query);

    return (
        // trying out inline style. I prefer to use css classes
        <main className={styles.main} style={{ padding: '10rem' }}>
            {data.now}
        </main >
    )
}