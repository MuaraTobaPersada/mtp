import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}

const Member: React.FC<Props> = ({ id, name}) => (
  <div>
    <Image
      src={`/assets/team/mtp_faces_${id}.png`}
      alt={name}
      width={1366}
      height={1555}
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
  </div>
);

export default Member;
