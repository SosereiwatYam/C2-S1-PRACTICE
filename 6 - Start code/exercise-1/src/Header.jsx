import pnLogo from "./assets/pn-logo.png";
export const Header = ({batchName}) => {
  return (
    <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for {batchName}</h1>
      </header>
    );
};