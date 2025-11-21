// "use client";
// import React from "react";
// import { motion } from "motion/react";



// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// export const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children
// }) => {
//   return (
//     <div onMouseEnter={() => setActive(item)} className="relative">
    
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}>
//           {active === item && (
//             <div
//               className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 // layoutId ensures smooth animation
//                 layoutId="active"
//                 className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 border-black/[0.2] dark:border-white/[0.2] shadow-xl dark:border-slate-800">
//                 <motion.div
//                   // layout ensures smooth animation
//                   layout
//                   className="w-fit h-full p-4">
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export const Menu = ({
//   setActive,
//   children
// }) => {
//   return (
//     <nav
//       // resets the state
//       onMouseLeave={() => setActive(null)}
//       className="relative rounded-full border border-slate-200 border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6  dark:border-slate-800">
//       {children}
//     </nav>
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   href,
//   src
// }) => {
//   return (
//     <a href={href} className="flex space-x-2">
//       <img
//         src={src}
//         width={140}
//         height={70}
//         alt={title}
//         className="shrink-0 rounded-md shadow-2xl" />
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
//           {title}
//         </h4>
//         <p className="text-neutral-700 text-sm dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </a>
//   );
// };

// export const HoveredLink = ({
//   children,
//   ...rest
// }) => {
//   return (
//     <a
//       {...rest}
//       className="text-neutral-700 dark:text-neutral-200 hover:text-black">
//       {children}
//     </a>
//   );
// };


"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({  active, item, children }) => {

  return (
    <>
      <div className={`w-screen fixed !left-0 !top-0 pt-[5.7%]`}>
        {active !== null && (
          <motion.div
            className={`w-full flex justify-center items-center `}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={transition}
          >
            {active === item && (
              <div
                className={` w-screen drop-shadow-lg `}
              >
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="bg-white overflow-hidden"
                >
                  <motion.div layout className="w-full h-full p-4">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      onMouseEnter={()=>setActive(null)}
      className="relative flex justify-center px-8 py-6 h-full "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </a>
  );
};
