import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({
  params: { subtes, paket },
}: {
  params: { subtes: string; paket: string };
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        Soal Drill {`${subtes}`} {`${paket}`}
      </div>
      <div>waktu: 3 jam </div>
      <Button asChild>
        <Link href={`/drill/${subtes}/${paket}/1`}>Start</Link>
      </Button>
    </div>
  );
}
