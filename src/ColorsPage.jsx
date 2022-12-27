import React from 'react';

function ColorsPage({ grayColorCodes, homeData }) {

    const { colors } = homeData;

    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>

            {/* Content Row */}
            <div className="row">

                {/* First Column */}
                <div className="col-lg-4">

                    {/* Custom Text Color Utilities */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </div>
                        <div className="card-body">

                            {grayColorCodes.map((code) => (
                                <p className={`text-gray-${code} p-3 ${(code <= 400) ? 'bg-dark' : ''} m-0`}>.text-gray-{code}</p>
                            ))}

                        </div>
                    </div>

                    {/* Custom Font Size Utilities */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                        </div>
                        <div className="card-body">
                            <p className="text-xs">.text-xs</p>
                            <p className="text-lg mb-0">.text-lg</p>
                        </div>
                    </div>

                </div>

                {/* Second Column */}
                <div className="col-lg-4">

                    {/* Background Gradient Utilities */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                            </h6>
                        </div>
                        <div className="card-body">

                            {colors.map((color) => (
                                <div className={`px-3 py-5 bg-gradient-${color} text-white`}>.bg-gradient-{color}</div>
                            ))}

                        </div>
                    </div>

                </div>

                {/* Third Column */}
                <div className="col-lg-4">

                    {/* Grayscale Utilities */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                            </h6>
                        </div>
                        <div className="card-body">

                            {grayColorCodes.map((code) => (
                                <div className={`p-3 bg-gray-${code} ${(code >= 500) ? 'text-white' : ''}`}>.bg-gray-{code}</div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ColorsPage;