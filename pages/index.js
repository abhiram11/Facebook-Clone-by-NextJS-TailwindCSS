import Head from "next/head";
import Header from "./components/Header";

// 11:50 purge in tailwind.config.js will help tailwind to work in nextjs
// telling important folders to cleanup/purge for tailwind
// 12:31 tailwind.config: node : "jit"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook!</title>
      </Head>
      <h1> Facebook at index.js</h1>

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
