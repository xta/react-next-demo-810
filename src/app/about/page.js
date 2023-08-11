"use client"

import { useState } from "react"

import Link from "next/link"
import styles from './about.module.css'

import Heading from '@/components/Heading'
import Section from "@/components/Section"

import { AboutContext } from "./AboutContext"

import Item from './Item'

export default function About() {

    const [name, setName] = useState('')

    function handleName(event) {
        setName(event.target.value)
    }

    return (
        <>
            <div className={styles.wrap}>
                <div><Link href="/">Home</Link></div>
                <div>About</div>

                <div>
                    <label>
                        Enter name{' '}
                        <input value={name} onChange={(e) => handleName(e)} placeholder="Username"></input>
                    </label>
                </div>

                <hr className={styles.line} />

                <AboutContext.Provider value={name}>
                    <Section level={1}>
                        <Heading>Title <Item /></Heading>
                        <Section level={2}>
                            <Heading>Heading <Item /></Heading>
                            <Heading>Heading</Heading>
                            <Heading>Heading</Heading>
                            <Section level={3}>
                                <Heading>Sub-heading</Heading>
                                <Heading>Sub-heading <Item /></Heading>
                                <Heading>Sub-heading</Heading>
                                <Section level={4}>
                                    <Heading>Sub-sub-heading</Heading>
                                    <Heading>Sub-sub-heading</Heading>
                                    <Heading>Sub-sub-heading <Item /></Heading>
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </AboutContext.Provider>
            </div>
        </>
    )

}