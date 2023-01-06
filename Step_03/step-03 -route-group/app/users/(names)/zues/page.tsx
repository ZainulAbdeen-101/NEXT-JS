import { FC } from "react";
import Link from "next/link";


const father =()=>{
    return <div><h1>This is me Zues</h1>
    <nav>
    <ul>
      <Link href="users/zues"><li>Zues</li></Link>  
      <Link href="users/kratos"> <li>Kratos</li></Link> 
    </ul>
</nav>
</div>
}
export default father

 