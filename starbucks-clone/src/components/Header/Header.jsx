import "./Header.css";
import Logo from "@/assets/images/starbucks_logo.png";

const leftTabList = [
  {
    id: 1,
    tabTitle: "MENU",
    className: "menu",
  },
  {
    id: 2,
    tabTitle: "REWARDS",
    className: "rewards",
  },
  {
    id: 3,
    tabTitle: "GIFT CARDS",
    className: "giftCards",
  },
];

const rightTabList = [
  {
    id: 4,
    tabTitle: "Find a Store",
    className: "findStore",
  },
  {
    id: 5,
    tabTitle: "Sign in",
    className: "signIn",
  },
  {
    id: 6,
    tabTitle: "Join now",
    className: "join",
  },
];

export function Header() {
  return (
    <header>
      <div className="nav-wrapper inner">
        <h1 className="logo">
          <a href="#">
            <img src={Logo} alt="스타벅스 로고" />
          </a>
        </h1>
        <nav className="navigator">
          <h2 className="a11y-hidden">메인 메뉴</h2>
          <ul className="menu">
            {leftTabList.map((item) => (
              <li className="menuItem" key={item.id}>
                <a href="#">{item.tabTitle}</a>
              </li>
            ))}
          </ul>
          <ul className="member">
            {rightTabList.map((item) => (
              <li key={item.id}>
                <a href="#" className={item.className}>
                  {item.tabTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
