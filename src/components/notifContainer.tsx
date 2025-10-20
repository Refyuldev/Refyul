import { motion } from "motion/react";
export const SuccessContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.section
      className="w-full fixed top-0 left-0 p-4 bg-primary text-center z-90"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      {children}
    </motion.section>
  );
};
export const ErrorContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.section
      className="w-full fixed top-0 left-0 p-4 bg-red-500 text-center z-90"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      {children}
    </motion.section>
  );
};
