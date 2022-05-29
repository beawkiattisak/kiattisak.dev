import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo"
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("service-worker.js").then(
          () => {
            console.log("Service Worker registration successful!");
          },
          (err) => {
            console.log("Service Worker registration failed: ", err);
          }
        )
      })
    }
  })

  return (
    <>
      <NextSeo
        title="Professional Profile"
        titleTemplate="Kiattisak Beaw Sanburee | %s"
        defaultTitle="Kiattisak Beaw Sanburee | Professional Profile"
        description="Hello, My name is Kiattisak. I'm a blockchain expert, and I can write Typescript Golang Python SQL and use Docker."
        canonical="https://www.kiattisak.dev/"
        openGraph={{
          url: "https://www.kiattisak.dev/",
          title: "Kiattisak Beaw Sanburee | Professional Profile",
          site_name: "beawkiattisak",
          description: "Hello, My name is Kiattisak. I'm a blockchain expert, and I can write Typescript Golang Python SQL and use Docker.",
          images: [
            {
              url: "/assets/kiattisak-blueprint.png",
              width: 2560,
              height: 1600,
              alt: "Kiattisak OG Blueprint",
            },
          ],
        }}
        twitter={{
          handle: "@beawkiattisak",
          site: "@beawkiattisak",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
