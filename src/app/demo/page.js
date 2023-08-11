import Image from 'next/image'

import styles from './demo.module.css'

export default function DemoPage() {
    return (
        <main className={styles.main}>
            <h1>Demo</h1>

            <p>Load some images</p>

            <div>
                <p>From the web</p>
                <Image
                    src="https://placekitten.com/200/300"
                    alt="cat"
                    width={200}
                    height={300}
                />
            </div>

            <div>
                <p>From public/</p>
                <Image
                    src="/boxes.png"
                    alt="boxes"
                    width={200}
                    height={200}
                />
            </div>
        </main>
    )
}


