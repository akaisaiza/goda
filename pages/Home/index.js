import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeaderHome from '../../components/Home2Layout/HeaderHome2';
import Footer from '../../components/Layout/Footer';
export default function Home2() {
  const router = useRouter();
  const [jwt, setJwt] = useState('');

  useEffect(() => {
    // const storedJwt = localStorage.getItem("jwtToken");
    const storedJwt =  "jdhbv";
    if (!storedJwt || storedJwt === undefined) {
      router.push('/Auth/login');
    } else {
      setJwt(storedJwt);
    }
  }, [router]);

  return (
    <>
      {jwt ? (
        <>
          <HeaderHome />
          {/* <Footer/> */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
