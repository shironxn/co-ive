import { CreditCard, QrCode } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col text-center items-center gap-8 mt-32 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          <span className="text-primary">about</span> us
        </h1>
        <p className="max-w-2xl">
          CO-IVE hadir sebagai lebih dari sekadar brand kopi—kami adalah sebuah
          pengalaman. Terinspirasi dari filosofi harmoni antara tradisional dan
          modern, kami menghadirkan cita rasa yang tidak hanya memanjakan lidah,
          tetapi juga membawa cerita dalam setiap tegukan.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <h2>
          available <span className="text-primary">payment</span>
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <CreditCard className="w-8 h-8 text-primary" />
            <span>Cash</span>
          </div>
          <div className="flex flex-col items-center">
            <QrCode className="w-8 h-8 text-primary" />
            <Link href={"/about/qris.jpeg"} className="underline">
              QRIS
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
