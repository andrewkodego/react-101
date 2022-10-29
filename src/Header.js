import React from "react";

const logoSection = <div class="logo">Logo Here</div>;
const menus = ["Home","About","Contact Us","Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="row">
                    <div className="col-sm-4">
                    {logoSection}
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            {mainMenu}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;