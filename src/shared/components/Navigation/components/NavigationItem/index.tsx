import st from "./styles.module.scss"

interface I_NavItemProps {
    screen :{
        screenId: string;
        displayName:  string;
    }
}
export default function NavItem({screen}:I_NavItemProps){
    return <div className={st.container} onClick={()=>console.log(screen.screenId)}>{screen.displayName}</div>
}