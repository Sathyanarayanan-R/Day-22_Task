import React from 'react';
import { Link } from 'react-router-dom';

function NavPage() {

    return (
        <>
            {/* Sidebar */}
            < ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

                {/* Sidebar - Brand */}
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link >

                {/* Divider */}
                < hr className="sidebar-divider my-0" ></hr >

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* Divider */}
                < hr className="sidebar-divider" ></hr >

                {/* Heading */}
                < div className="sidebar-heading" >
                    Interface
                </div >

                {/* Nav Item - Pages Collapse Menu */}
                < li className="nav-item" >
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link to="/buttons" className="collapse-item">Buttons</Link>
                            <Link to="/cards" className="collapse-item">Cards</Link>
                        </div>
                    </div>
                </li >

                {/* Nav Item - Utilities Collapse Menu */}
                < li className="nav-item" >
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link to="/colors" className="collapse-item">Colors</Link>
                            <Link to="/borders" className="collapse-item">Borders</Link>
                            <Link to="/animations" className="collapse-item">Animations</Link>
                            <Link to="/other" className="collapse-item">Other</Link>
                        </div>
                    </div>
                </li >

                {/* Divider */}
                < hr className="sidebar-divider" ></hr >

                {/* Heading */}
                < div className="sidebar-heading" >
                    Addons
                </div >

                {/* Nav Item - Pages Collapse Menu */}
                < li className="nav-item" >
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link to="/login" className="collapse-item">Login</Link>
                            <Link to="/register" className="collapse-item">Register</Link>
                            <Link to="/forgotpassword" className="collapse-item">Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to="404page" className="collapse-item">404 Page</Link>
                            <Link to="blankpage" className="collapse-item">Blank Page</Link>
                        </div>
                    </div>
                </li >

                {/* Nav Item - Charts */}
                < li className="nav-item" >
                    <Link to="/charts" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li >

                {/* Nav Item - Tables */}
                < li className="nav-item" >
                    <Link to="tables" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li >

                {/* Divider */}
                < hr className="sidebar-divider d-none d-md-block" ></hr >

                {/* Sidebar Toggler (Sidebar) */}
                < div className="text-center d-none d-md-inline" >
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div >

                {/* Sidebar Message */}
                < div className="sidebar-card d-none d-lg-flex" >
                    <img className="sidebar-card-illustration mb-2" src="./img/undraw_rocket.svg" alt="..."></img>
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div >

            </ul >
            {/* End of Sidebar */}
        </>
    );
}

export default NavPage;