import React from 'react';

import "./GalleryPanel.scss";

export default function GalleryPanel() {
    return (
        <div className="gallery-panel">
            <div className="gallery-panel__wrapper">
                <div className="dashboard">
                    <div className="board-gray__start"></div>
                    <div className="dashboard__caption board board-gray">
                        <h3>DOWNLOAD</h3>
                        <p>Latest stable</p>
                    </div>
                    <div className="dashboard__file board board-gray">Loading failed</div>
                    <div className="dashboard__production  board board-red">15 KB</div>
                    <div className="dashboard__development board board-red">52 KB</div>
                    <div className="dashboard__repositiry board board-red">1397</div>
                    <div className="board-red__end"></div>
                </div>
            </div>
        </div>
    )
}
