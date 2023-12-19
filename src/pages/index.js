
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Blog';
import { RiHomeSmileLine } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import Banner from './Banner';
import Head from 'next/head';



function Home() {
  return (
    <>
      <Head>
        <title>Blogging Website</title>
        <meta name="description" content="Books Blogging Website" />
      </Head>
    <div className='row bg-dark p-3'>
      <div className='col-lg-8 text-white' >
      <Link href='/' style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:'18px'}}>
Blog</Link></div>
      <div className='col-lg-2'>
</div>
      <div className='col-lg-2'>
      <Link href='/' style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:'18px'}}>
      <RiHomeSmileLine />
 Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href='/CreatePost' style={{textDecoration:'none',color:'white',fontWeight:'bold',fontSize:'18px'}}> <LuImagePlus /> Create Post</Link>

      </div>
    </div>
    {/* <Banner/> */}
      <Blog/>
    </>
  );
}

export default Home;
