import TextArea from "@/components/TextArea";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="flex w-full h-svh flex-col items-center bg-black text-white">
      <TextArea />
      <Timer />
    </main>
  );
}
