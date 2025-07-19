import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="md:grid md:grid-cols-2 md:h-[50vh] sm:h-[80vh] sm:flex sm:flex-col sm:justify-center max-sm:h-[650px]">
        <div className="bg-green-50 h-[50vh] flex flex-col gap-4 items-center justify-center max-sm:h-[300px]">
          <p className="text-3xl font-bold max-sm:text-2xl">Sasta,Sundar and Tikau</p>
          <p className="px-32 text-center font-bold">That&apos;s our USP and soon our URL shortener will dominate the industry...</p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold text-white'>Try Now</button></Link>
            {/* <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold text-white'>GitHub</button></Link> */}
          </div>
        </div>

        <div className="md:flex md:justify-center md:relative sm: flex sm:flex-col sm:justify-center sm:items-center sm:h-[50vh] max-sm:justify-center">
          <Image className="mix-blend-darken sm:h-[500] sm:w-[1000] max-sm:h-[350px]" src={"/vector.jpg"} alt="image of a vector" width={500}
            height={300} />
          {/* <Image className="mix-blend-darken" src={"/vector.jpg"} alt="image of a vector" fill={true} /> */}

        </div>

      </section>

      <section className="flex justify-center h-[40vh] bg-blue-100 sm:h-[55vh] max-sm:h-[700px]">
        <div className="text-2xl font-bold text-center w-[80vw] flex flex-col justify-center max-sm:text-lg">
          LinkUp is a sleek and efficient URL shortener app designed to simplify the way users share and manage links. With just a few clicks, LinkUp transforms long, cluttered URLs into short, shareable links that are perfect for social media, marketing campaigns, or everyday use. The app features real-time analytics, allowing users to track clicks, geographic data, and traffic sources to optimize engagement. LinkUp also offers customizable short links, QR code generation, and user-friendly dashboards, making it a powerful tool for individuals, businesses, and content creators looking to streamline their online presence.
        </div>

      </section>

    </main>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
