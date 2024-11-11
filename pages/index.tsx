import Head from "next/head";

import Mainhead from "@/components/mainhead";
import AboutUs from "@/components/aboutus";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="">
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
      <AboutUs />
      <Skills />
    </div>
  );
}
