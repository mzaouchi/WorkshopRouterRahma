import { useNavigate, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} = useParams()
    const found = users.find((el,i,t)=> el.id == id)

    const navigate = useNavigate()
    return(
        <div>
            <h2>{found.name}</h2>
            <h3>{found.age}</h3>
            <button onClick={()=>navigate('/')}>Go Home</button>
        </div>
    )
}

export default Profil