import Logo from "@/assets/starbucks_logo.png";

export default function Header() {
  return (
    <div className="nav-wrapper inner">
      <h1 className="logo">
        <a href="#">
          <img src={Logo} alt="스타벅스 로고" />
        </a>
      </h1>
      <nav className="navigator">
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul className="menu">
          <li className="menuItem">
            <a href="#">MENU</a>
          </li>
          <li className="menuItem">
            <a className="is-active" href="#">
              REWARDS
            </a>
          </li>
          <li className="menuItem">
            <a href="#">GIFT CARDS</a>
          </li>
        </ul>
        <ul className="member">
          <li>
            <a href="#" className="findStore">
              Find a Store
            </a>
          </li>
          <li>
            <a href="#" className="signIn">
              Sign in
            </a>
          </li>
          <li>
            <a href="#" className="join">
              Join now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
