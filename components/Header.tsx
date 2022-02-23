import Image from "next/image";
import style from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logoWrapper}>
        <Image src="/logo.png" width={160} height={40} />
      </div>
      <div className={style.menuWrapper}>
        <span>Home</span>
        <span>Auction</span>
        <span>Roadmap</span>
        <span>Team</span>
        <button>Join Our Discord</button>
      </div>
    </div>
  );
};
