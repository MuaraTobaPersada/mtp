import "@/styles/globals.css";
import ScrollObserver from "@/utils/scroll-observer";
import SizeObserver from "@/utils/size-observer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}
