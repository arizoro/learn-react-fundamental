import { useContext } from "react"
import { GlobalContex } from "../context"

// ! ketika membuat Component diawali dgn huruf Kapital
const ArticleStatus = ({isNew}) => {
    return isNew ? <span> --Baru</span> : ''
}

const ArticleStatus2 = () => {
    return <span>Baru lagi!!</span>
}

function Article (props) {
    const user = useContext(GlobalContex)

    return(
        <>
        <div>
            <h3>{props.title}</h3>
            <small>Date : {props.date} Tags: {props.tags.join(",")}
            {/* {props.isNew ? "Baru voy" : "lama"}  */}
            {/* {props.isNew && "  --Baru" }  */}
            </small>
            {/* <ArticleStatus isNew={props.isNew} /> */}
            {props.isNew ? <ArticleStatus2/> : ''}
        </div>
        <div>
            <small>Ditulis oleh : {user.username}</small>
        </div>
        </>
        )
}


export default Article