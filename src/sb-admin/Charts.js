import React from 'react'

function Charts() {
  return <>
   
    <div id="wrapper">

        <div id="content-wrapper" className="d-flex flex-column">

            
            <div id="content">

             
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                   
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                ariaLabel="Search" ariaDescribedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    
                    <ul className="navbar-nav ml-auto">

                        
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="{javascript(void)}" id="searchDropdown" role="button"
                                data-toggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                ariaLabelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." ariaLabel="Search"
                                            ariaDescribedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                       
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="{javascript(void)}" id="alertsDropdown" role="button"
                                dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                             
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                          
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                ariaLabelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="{javascript(void)}">Show All Alerts</a>
                            </div>
                        </li>

                       
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="{javascript(void)}" id="messagesDropdown" role="button"
                                dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                               
                                <span className="badge badge-danger badge-counter">7</span>
                            </a>
                            
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                ariaLabelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="..."/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div className="font-weight-bold">
                                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div className="small text-gray-500">Emily Fowler ?? 58m</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="..."/>
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div className="small text-gray-500">Jae Chun ?? 1d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="..."/>
                                        <div className="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div className="small text-gray-500">Morgan Alvarez ?? 2d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="{javascript(void)}">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="..."/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className="small text-gray-500">Chicken the Dog ?? 2w</div>
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="{javascript(void)}">Read More Messages</a>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="{javascript(void)}" id="userDropdown" role="button"
                                dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" alt="..."/>
                            </a>
                            
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                ariaLabelledby="userDropdown">
                                <a className="dropdown-item" href="{javascript(void)}">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="{javascript(void)}">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="{javascript(void)}">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="{javascript(void)}" dataToggle="modal" dataTarget="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
               
                <div className="container-fluid">

                  
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a
                            target="blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                            documentation</a>.</p>

                   
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">

                           
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                    <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                                </div>
                            </div>

                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <canvas id="myBarChart"></canvas>
                                    </div>
                                    <hr/>
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                                </div>
                            </div>

                        </div>

                      
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                               
                                <div className="card-body">
                                    <div className="chart-pie pt-4">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <hr/>
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
           
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>

        </div>
        

    </div>
   
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" ariaLabelledby="exampleModalLabel"
        ariaHidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" dataDismiss="modal" ariaLabel="Close">
                        <span ariaHidden="true">??</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" dataDismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Charts