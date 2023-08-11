import { useContext } from 'react';
import { LevelContext } from '@/components/LevelContext'
import { AboutContext } from './AboutContext';

export default function Item() {
    let level = useContext(LevelContext)
    let name = useContext(AboutContext)

    if (name === '') {
        return <span><em>[Item, get level: {level}]</em></span>
    }

    return (
        <span><em>[Item, get level: {level}, get name: {name}]</em></span>
    )
}