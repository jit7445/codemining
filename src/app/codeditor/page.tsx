// import React from 'react';
// // import DarkModeSwitch from '@/components/DarkModeSwitch';
// import Navbar from '@/components/Navbar';
// import Header from '@/components/Header';
// import CodeEditor from '@/components/CodeEditor';

// const Page = () => {
//   return (
//     <div className="flex flex-col -mt-2 md:flex-row w-full">
//       {/* <Header/> */}
//       {/** Section for writing code */}
     
//       <div className="w-full flex flex-col gap-4 bg-zinc-900 p-4   border-2 border-slate-100 h-full">
        
//         <textarea
//           className="text-white bg-zinc-800 h-full w-full p-4 rounded-lg"
//           placeholder="Write your code here..."
//         ></textarea>
//         {/* <CodeEditor /> */}

//       </div>
      
//       {/** Section for output and input display */}
//       <div className="w-full flex flex-col gap-4  bg-zinc-900 p-4   border-2 border-slate-100">
      
//         <textarea
//           className="text-white bg-zinc-900 h-full w-full p-4 rounded-lg resize-none"
//           placeholder="Output will be shown here..."
//         ></textarea>
//       </div>

//     </div>
//   );
// };

// export default Page;
// src/app/page.tsx
'use client';
import React, { useState } from 'react';
// import CodeEditor from '@/components/CodeEditor';

const Page = () => {
  // const [code, setCode] = useState<string>('console.log("Hello, World!");');

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 bg-gray-900">
        {/* <CodeEditor /> */}
      </div>
      <div className="flex-1 p-4 bg-gray-800">
        <textarea
          className="text-white bg-zinc-900 h-full w-full p-4 rounded-lg resize-none"
          placeholder="Output will be shown here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Page;
