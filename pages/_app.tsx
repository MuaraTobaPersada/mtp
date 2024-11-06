import "@/styles/globals.css";
import ScrollObserver from "@/utils/scroll-observer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}
