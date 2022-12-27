import React from 'react';

function BordersPage({ homeData }) {

    const { colors } = homeData;

    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>

            {/* Content Row */}
            <div className="row">

                {/* Border Left Utilities */}
                <div className="col-lg-6">

                    {colors.map((color) => (
                        (color !== 'light') ?
                            <div className={`card mb-4 py-3 border-left-${color}`}>
                                <div className="card-body">
                                    .border-left-{color}
                                </div>
                            </div>
                            : ''
                    ))}

                </div>

                {/* Border Bottom Utilities */}
                <div className="col-lg-6">

                    {colors.map((color) => (
                        (color !== 'light') ?
                            <div className={`card mb-4 py-3 border-bottom-${color}`}>
                                <div className="card-body">
                                    .border-bottom-{color}
                                </div>
                            </div>
                            : ''
                    ))}

                </div>

            </div>

        </div>
    )
}

export default BordersPage;