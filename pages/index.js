import Head from "next/head";
import Header from "../components/Header";

// 11:50 purge in tailwind.config.js will help tailwind to work in nextjs
// telling important folders to cleanup/purge for tailwind
// 12:31 tailwind.config: node : "jit"
// 20:00 image optimization : image loads only when on screen (lazy loading)
// also gives secuirty measures for <Image />, tell nextjs what domains are allowed
// 28:00 tailwind into action ! using css features in className itself!
// 38:30 color comes in shades... so className="flex text-gray-600" will be DARKER than gray-200

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook!</title>
      </Head>
      <h1>Facebook at index.js</h1>

      {/* HEader */}
      <Header />
      <main>
        {/* Sidebar
        Feed
        Widgets */}
      </main>
    </div>
  );
}
