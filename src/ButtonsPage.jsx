import React from 'react';

function ButtonsPage({buttonsData, homeData}) {
    
    const {circleBtnSizes, btnsIcons, splitBtnIcons} = buttonsData;
    const {colors} = homeData;

    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

            <div className="row">

                <div className="col-lg-6">

                    {/* Circle Buttons */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                        </div>
                        <div className="card-body">
                            <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                buttons as shown in the examples below!</p>

                            {circleBtnSizes.map((size) => (
                                <>
                                    <div className="mt-4 mb-2">
                                        <code>.btn-circle {(size !== '') ? '.' + size : ''}</code>
                                    </div>
                                    {btnsIcons.map((icon, index) => (
                                        <a href="#" className={`btn btn-${colors[index]} btn-circle ${size}`}>
                                            <i className={`${(icon !== 'facebook-f') ? 'fas' : 'fab'} fa-${icon}`}></i>
                                        </a>
                                    ))}
                                </>
                            ))}
                        </div>
                    </div>

                    {/* Brand Buttons */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                        </div>
                        <div className="card-body">
                            <p>Google and Facebook buttons are available featuring each company's respective
                                brand color. They are used on the user login and registration pages.</p>
                            <p>You can create more custom buttons by adding a new color variable in the
                                <code>_variables.scss</code> file and then using the Bootstrap button variant
                                mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                file.</p>
                            <a href="#" className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                                .btn-google</a>
                            <a href="#" className="btn btn-facebook btn-block"><i
                                className="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                        </div>
                        <div className="card-body">
                            <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                the markup in the examples below. The examples below also use the
                                <code>.text-white-50</code> helper class on the icons for additional styling,
                                but it is not required.</p>

                            {splitBtnIcons.map((icon, index) => (
                                <>
                                    <div className="my-2"></div>
                                    <a href="#" className={`btn btn-${colors[index]} btn-icon-split`}>
                                        <span className={`icon text-${(colors[index] !== 'light')?'white-50':'gray-600'}`}>
                                            <i className={`fas fa-${icon}`}></i>
                                        </span>
                                        <span className="text">Split Button {colors[index][0].toUpperCase() + colors[index].slice(1, colors[index].length)}</span>
                                    </a>
                                </>
                            ))}
                            <div className="mb-4"></div>
                            <p>Also works with small and large button classes!</p>
                            <a href="#" className="btn btn-primary btn-icon-split btn-sm">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag"></i>
                                </span>
                                <span className="text">Split Button Small</span>
                            </a>
                            <div className="my-2"></div>
                            <a href="#" className="btn btn-primary btn-icon-split btn-lg">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag"></i>
                                </span>
                                <span className="text">Split Button Large</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ButtonsPage;