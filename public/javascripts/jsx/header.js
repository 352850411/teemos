React.render(
    <nav className="white" role="navigation">
        <div className="nav-wrapper container">
            <a id="logo-container" href="/" className="brand-logo">
                Teemos
                <img src="/images/icon.png" />
            </a>
            <div className="right-nav hide-on-med-and-down">
                <a href="" className="waves-effect waves-light btn-flat login">登录</a>
                <a href="/sign_up" className="orange waves-effect waves-light btn">注册</a>
            </div>
            <ul className="right hide-on-med-and-down">
                <li><a href="#">首页</a></li>
                <li><a href="#">照片</a></li>
                <li><a href="#">关于</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
    </nav>,
    document.getElementById('app-header')
);

