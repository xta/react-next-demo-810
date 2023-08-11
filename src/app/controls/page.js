"use client"

import styles from './controls.module.css'

import { useState } from 'react'

export default function ControlsPage() {

    const [name, setName] = useState('Replace Me')

    const [buttonOn, setButtonOn] = useState(true)

    const [checked, setChecked] = useState(false)

    const [theme, setTheme] = useState('#ffffff')

    const [startDate, setStartDate] = useState('2023-08-10')

    const [meeting, setMeeting] = useState('2023-08-10T19:30')

    const [selection, setSelection] = useState('')

    const [radio, setRadio] = useState('')

    const [volume, setVolume] = useState('10')

    return (
        <>
            <main className={styles.main}>
                <h1>Controls</h1>

                <section>
                    <h4>Set</h4>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <h4>Get</h4>
                    {name}
                </section>

                <section>
                    <h4>button</h4>
                    <p>Toggle button color</p>
                    <button className={buttonOn ? styles.buttonOn : styles.buttonOff} onClick={() => setButtonOn(!buttonOn)}>Click me</button>
                    <p>Button mode: {buttonOn ? '1' : '2'}</p>
                </section>

                <section>
                    <h4>checkbox</h4>
                    <p>
                        <input value={checked} type="checkbox" id="cbox" onChange={() => setChecked(!checked)} />
                        <label for="cbox">My Value</label>
                    </p>
                    Checked? {checked ? 'Yes' : 'No'}
                </section>

                <section>
                    <h4>color</h4>
                    <input type="color" id="theme" name="theme" value={theme} onChange={(e) => setTheme(e.target.value)} />
                    <label for="theme">Theme</label>
                </section>

                <section>
                    <h4>date</h4>
                    <label for="start">Start date:</label>
                    <input type="date" id="start" name="trip-start" value={startDate} min="2023-01-01" max="2023-12-31" onChange={(e) => setStartDate(e.target.value)} />
                    <p>Date value: {startDate}</p>
                </section>

                <section>
                    <h4>datetime</h4>
                    <label for="meeting">Choose a time for your appointment:</label>
                    <input
                        type="datetime-local"
                        id="meeting"
                        name="meeting"
                        value={meeting}
                        min="2023-01-01T00:00"
                        max="2023-12-31T00:00"
                        onChange={(e) => setMeeting(e.target.value)}
                    />
                    <p>Meeting at {meeting}</p>
                </section>

                <section>
                    <h4>dropdown</h4>

                    <select
                        value={selection}
                        onChange={(e) => {
                            setSelection(e.target.value);
                        }}
                    >
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                        <option value="d">d</option>
                    </select>
                    <p>Selected: {selection}</p>
                </section>

                <section>
                    <h4>radio</h4>

                    <fieldset>
                        <legend>Select a maintenance drone:</legend>
                        <div>
                            <input type="radio" id="huey" name="drone" value="huey" checked={radio === 'huey'} onClick={(e) => setRadio(e.target.value)} />
                            <label for="huey">Huey</label>
                        </div>
                        <div>
                            <input type="radio" id="dewey" name="drone" value="dewey" checked={radio === 'dewey'} onClick={(e) => setRadio(e.target.value)} />
                            <label for="dewey">Dewey</label>
                        </div>
                        <div>
                            <input type="radio" id="louie" name="drone" value="louie" checked={radio === 'louie'} onClick={(e) => setRadio(e.target.value)} />
                            <label for="louie">Louie</label>
                        </div>
                    </fieldset>

                    <p>Selection: {radio === '' ? 'None' : radio}</p>
                </section>

                <section>
                    <h4>range/slider</h4>
                </section>

                <input type="range" id="volume" name="volume" min="0" max="24" value={volume} onChange={(e) => setVolume(e.target.value)} />
                <label for="volume">Volume</label>
                <p>
                    Volume {volume}
                </p>
            </main>
        </>
    )
}