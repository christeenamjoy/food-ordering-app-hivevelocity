

const Header = () => {

    return (
     <div className="w-full h-32 shadow-2xl pl-3">
        <Title />
        <div></div>

     </div>
   );
 };

 const Title = () => (

    <a href="/">
      <img
        className="w-32 h-32"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
   );

 export default Header;