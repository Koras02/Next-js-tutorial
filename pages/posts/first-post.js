// first-page 만들기 
import Link from "next/link";

// first-page 수정
export default function FirstPost() {
    return (
        <> 
         <h1>First Post</h1>
         <h2>
             <Link href="/">
                 <a>Back to home</a>
             </Link>
         </h2>
        </>
    )
}