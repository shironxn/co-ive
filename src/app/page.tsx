import { CTA } from "@/components/cta";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center gap-8 mt-32 px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { staggerChildren: 0.3, duration: 1 },
          },
        }}
      >
        <motion.h1
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          welcome to
        </motion.h1>
        <motion.h1
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <span className="text-primary italic">co-ive</span>: sip, savour,
          repeat!
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Menemani setiap momenmu dengan rasa kopi yang unik dan tak terlupakan.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <CTA />
      </motion.div>
    </div>
  );
}
