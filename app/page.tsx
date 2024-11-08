// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editinggg{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save .</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
import React, { useEffect } from "react";

const ChecklistForm: React.FC = () => {
  useEffect(() => {
    // โหลดสคริปต์จาก FontAwesome CDN
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/bf5f0b5667.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // โหลดสไตล์จาก Bootstrap CDN
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.integrity =
      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      // ลบสคริปต์และลิงก์ออกเมื่อคอมโพเนนต์ unmount
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CHECKLIST FORM</title>
      </head>

      <body className="body-bg-color">
        <div className="container">
          <h1 className="text-white">Checklist Form</h1>
          {/* ตัวอย่างการใช้ checkbox */}
          <div>
            <input type="checkbox" className="has-checkbox" id="check1" />
            <label htmlFor="check1" className="text-white">
              Task 1
            </label>
          </div>
          <div>
            <input type="checkbox" className="has-checkbox" id="check2" />
            <label htmlFor="check2" className="text-white">
              Task 2
            </label>
          </div>
        </div>
      </body>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

        .custom-icon-size {
          font-size: 25px;
        }

        * {
          font-family: "Kanit", sans-serif;
          font-weight: 400;
          font-style: normal;
        }

        body {
          background-color: #3167b1;
        }

        .body-bg-color {
          background-color: #3167b1;
        }

        .has-checkbox {
          width: 25px;
          height: 25px;
          padding: 0;
        }

        .has-no-padding {
          padding: 0;
        }

        .no-checkbox {
          width: 25px;
          height: 25px;
          padding: 0;
        }

        .border-text-input {
          border: 0px;
          border-radius: 5px;
        }

        .img-icon {
          width: 25px;
          height: 25px;
          left: 2.5%;
          top: 50%;
          transform: translate(50%, -50%);
        }

        .img-icon-add {
          width: 30px !important;
          height: 30px !important;
        }

        .img-list {
          width: 60px;
          height: 60px;
        }

        .img-list-break {
          width: 60px;
          height: 60px;
          padding: 10px;
        }

        .img-list-bedroom {
          width: 60px;
          height: 60px;
          padding: 10px;
        }

        .img-list-bathroom {
          width: 60px;
          height: 60px;
          padding: 10px;
        }

        .img-list-garage {
          width: 60px;
          height: 60px;
          padding: 10px;
        }

        .font-size-form {
          font-size: 10px !important;
        }

        .item-name {
          padding: 0;
        }

        .center-checkbox-spec {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 3px;
        }

        .display-flex {
          display: flex;
        }

        .flex-1 {
          flex: 1;
          max-width: 40%;
        }

        .flex-2 {
          flex: 2;
          margin-top: 10px;
        }

        input::placeholder {
          font-size: 12px;
        }

        .bg-color-header {
          background-color: #eaf7ff !important;
        }

        .img-icon-added {
          width: 40px !important;
          height: 40px !important;
        }
      `}</style>
    </>
  );
};

export default ChecklistForm;