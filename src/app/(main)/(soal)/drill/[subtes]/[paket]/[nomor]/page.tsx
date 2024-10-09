import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({
  params: { subtes, paket, nomor },
}: {
  params: { subtes: string; paket: string; nomor: string };
}) {
  return (
    <div className="w-full flex gap-3">
      <div className="w-full border p-3 rounded-md">
        Soal drill subtes {`${subtes}`} paket {`${paket}`} nomor {`${nomor}`}
      </div>
      <div className="w-fit border p-3 rounded-md">
        <ul className="flex gap-1 w-[256px] flex-wrap">
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/1`}>1</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/2`}>2</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/3`}>3</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/4`}>4</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/5`}>5</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/6`}>6</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/7`}>7</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/8`}>8</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/9`}>9</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/10`}>10</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/11`}>11</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/12`}>12</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/13`}>13</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/14`}>14</Link>
            </Button>
          </li>
          <li>
            <Button className="w-12" asChild>
              <Link href={`/drill/${subtes}/${paket}/15`}>15</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
