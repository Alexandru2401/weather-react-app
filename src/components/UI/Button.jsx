import { motion } from "framer-motion";
export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      className={`${className} rounded-3xl p-2 text-slate-200 font-semibold`}
      {...props}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.button>
  );
}
