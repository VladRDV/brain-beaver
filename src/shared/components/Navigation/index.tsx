import { Link } from 'wouter'
import st from './styles.module.scss'
import { routes } from '@/shared/constants/routes'

export default function Navigation(){
    return <div className={st.container}>
        <Link href={routes.deckList}>All Decks</Link>
        {/* <Link href={routes.deckCreate}>New Deck</Link> */}
        {/* <Link href={routes.deckEdit}>Profile</Link> */}
        <Link href={routes.challenge}>Challenge mode</Link>
        <Link href={routes.settings}>Settings</Link>
    </div>
}