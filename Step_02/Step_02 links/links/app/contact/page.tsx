import Link from "next/link"
import "../style.css"


export default function contact(){
    return <nav className="head">
     
        <ul>
           <Link style={{ textDecoration: 'none' }} href="/home"> <li><h2>Home</h2></li> </Link>
          <Link style={{ textDecoration: 'none' }} href="/about">  <li><h2>About</h2></li></Link>    
            <Link style={{ textDecoration: 'none' }} href="/contact"><li><h2>Contact</h2></li></Link> 
        </ul>
        
      
    </nav>
}