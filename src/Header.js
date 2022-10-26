const logoSection = <div class="logo">Logo Here</div>;
const menus = ["Home","About","Contact Us","Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

function Header(){
    return(
        <div class="header">
            {logoSection}
            <ul>
                {mainMenu}
            </ul>
        </div>
    );
}

export default Header;