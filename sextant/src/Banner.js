import React from "react";

export default function Banner() {
    return (
        <header className="blog-header-logo py-3 border border-black border-bottom mb-3">
            <div className="container">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="text-muted" href="/">Click Here</a>
                    </div>
                    <div className="col-4 text-center">
                        <h1 className="blog-header-logo text-dark">Cisco Sextant App</h1>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="text-muted" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3">
                                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                            </svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="/">Button!</a>
                    </div>
                </div>
            </div>
        </header>
    );
}