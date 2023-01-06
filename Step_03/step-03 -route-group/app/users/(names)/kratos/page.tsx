import Link from "next/link"

export default function ok(){
    return <div>
        <h1>this is me kratos</h1>
        <nav>
            <ul>
              <Link href="users/zues"><li>Zues</li></Link>  
              <Link href="users/kratos"> <li>Kratos</li></Link> 
            </ul>
        </nav>
    </div>
}

    