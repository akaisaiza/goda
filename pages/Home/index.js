import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeaderHome from '../../components/Home2Layout/HeaderHome2';

export default function Home2() {
  const router = useRouter();
  const [jwt, setJwt] = useState('');

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwtToken");
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
