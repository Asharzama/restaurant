import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
