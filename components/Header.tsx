import Image from "next/image";
import logoIcon from "@/app/icon.svg";
import Link from "next/link";

function Header() {
  return (
    <header >
      <Link href={'/'} className="flex gap-x-5 jun-header border-b-0">
        <Image alt="Logo" src={logoIcon} width={45} height={45} />
        <h1 className="text-4xl font-bold text-foreground">EatTogether</h1>
      </Link>
    </header>
  );
}
export default Header;
