import { useContext } from 'react';
import { LevelContext } from '@/components/LevelContext'

export default function Item() {
    let level = useContext(LevelContext)

    return (
        <span><em>[Item, get level: {level}]</em></span>
    )
}