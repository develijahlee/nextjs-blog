import { useRouter } from 'next/router';

export default function Hello() {
  const router = useRouter();
  console.log(router.query);
  function home() {
    router.push('/');
  }
  return (
    <>
      {' '}
      <h1>hello</h1>
      <button onClick={home}>Click Me</button>
    </>
  );
}
