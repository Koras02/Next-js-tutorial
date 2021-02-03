// first-page 만들기 
import Link from "next/link";
// head-component 추가하기
import Head from 'next/head';
// layout 추가하기
import Layout from '../components/layout';


// Head-component 수정하기
// title 추가
export default function FirstPost() {
    return (
        <> 
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
         <h1>First Post</h1>
         <h2>
             <Link href="/">
                 <a>Back to home</a>
             </Link>
         </h2>
         </Layout>
        </>
    )
}