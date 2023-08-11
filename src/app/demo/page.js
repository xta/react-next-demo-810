import Image from 'next/image'

import Outer from './Outer'
import Middle from './Middle'
import Inner from './Inner'

import styles from './demo.module.css'

export default function DemoPage() {

    const words = ['apple', 'banana', 'cherry']

    return (
        <main className={styles.main}>
            <h1>Demo</h1>

            <h3>Load some images</h3>

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

            <h3>Here's a list of words</h3>
            <ul>
                {words.map((word) => <li key={word}>{word}</li>)}
            </ul>

            <h3>Here's some nested components</h3>
            <div>
                <Outer>
                    <Middle>
                        <Inner>
                            ****Center
                        </Inner>
                    </Middle>
                </Outer>
            </div>
        </main>
    )
}


