import TopBar from "../TopBar";
import NavBar from "../NavBar";
import NavBarPhone from "../NavBarPhone";

function Header() {
  return (
    <header id="header">
      <TopBar />
      <div className="wpo-site-header">
        <NavBar />
       {/*<NavBarPhone/>*/}
      </div>
    </header>
  );
}

export default Header;
