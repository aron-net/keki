import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <Link class="navbar-brand me-lg-5" to={{ pathname: '/' }}>
          <img className="navbar-brand-dark" src="assets/img/light.svg" alt="Rich logo" />
          {' '}
          <img className="navbar-brand-light" src="assets/img/dark.svg" alt="Rich logo" />
        </Link>
        <div className="d-flex align-items-center"><button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button></div>
      </nav>
      <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
              <div className="avatar-lg me-4"><img src="assets/img/profile-picture-3.jpg" className="card-img-top rounded-circle border-white" alt="Bonnie Green" /></div>
              <div className="d-block">
                <h2 className="h5 mb-3">Hi, Jane</h2>
                <a href="#" className="btn btn-secondary btn-sm d-inline-flex align-items-center">
                  <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </a>
              </div>
            </div>
            <div className="collapse-close d-md-none">
              <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center">
                <span className="sidebar-icon">
                  <img src="assets/img/light.svg" height="20" width="20" alt="Rich Logo" />
                  {' '}
                </span>
                <span className="mt-1 ms-1 sidebar-text">Rich Overview</span>
              </a>
            </li>
            <li className="nav-item active">
              <Link class="nav-link" to={{ pathname: '/' }}>
                <span className="sidebar-icon">
                  <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </span>
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to={{ pathname: '/settings' }}>
                <span className="sidebar-icon">
                  <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="sidebar-text">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-app">
                <span>
                  <span className="sidebar-icon">
                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="sidebar-text">Tables</span>
                </span>
                <span className="link-arrow">
                  <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </span>
              <div className="multi-level collapse" role="list" id="submenu-app" aria-expanded="false">
                <ul className="flex-column nav">
                  <li className="nav-item"><Link class="nav-link" to={{ pathname: '/tables' }}><span className="sidebar-text">Bootstrap Tables</span></Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span className="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-pages">
                <span>
                  <span className="sidebar-icon">
                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                  </span>
                  <span className="sidebar-text">Page examples</span>
                </span>
                <span className="link-arrow">
                  <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </span>
              <div className="multi-level collapse" role="list" id="submenu-pages" aria-expanded="false">
                <ul className="flex-column nav">
                  <li className="nav-item"><Link class="nav-link" to={{ pathname: '/sign-in' }}><span className="sidebar-text">Sign In</span></Link></li>
                  <li className="nav-item"><Link class="nav-link" to={{ pathname: '/sign-up' }}><span className="sidebar-text">Sign Up</span></Link></li>
                  <li className="nav-item"><Link class="nav-link" to={{ pathname: '/forgotpassword' }}><span className="sidebar-text">Forgot password</span></Link></li>
                  <li className="nav-item"><Link class="nav-link" to={{ pathname: '/resetpassword' }}><span className="sidebar-text">Reset password</span></Link></li>
                </ul>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
