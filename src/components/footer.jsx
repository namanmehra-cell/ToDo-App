export default function Footer(props){

let date = new Date().getFullYear()
return(
    <div className={`d-flex align-items-center justify-content-center text-${props.theme==='light'?'dark':'light'}`} style={{marginTop:"250px", lineHeight:"0.3"

}}>
    <footer>
    <p>Copyright © {date} Made by Naman</p>
    
    </footer>
    </div>
)

}