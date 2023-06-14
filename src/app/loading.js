import { ClipLoader } from "react-spinners"
export default function loading() {
    return (
        <div style={{minHeight:'100vh', display:'flex',justifyContent:'center', alignItems:'center'}}>
                <ClipLoader size='120' color='#3898EC'/>
        </div>
    )
}