import Head from "next/head";
import Image from "next/image";

import Mainhead from "@/components/mainhead";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT Muara Toba Persada</title>
        <meta
          name="description"
          content="PT Muara Toba Persada Official Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mainhead />
    </>
  );
}
