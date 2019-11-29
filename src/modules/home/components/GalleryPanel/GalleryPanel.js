import React from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../../../../context/theme-context';
import "./GalleryPanel.scss";

export default function GalleryPanel(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className="gallery-panel">
                    <div className={"gallery-panel__wrapper gallery-panel__wrapper--" + theme}>
                        <div className={"dashboard dashboard--" + theme}>
                            <div className={"board-gray__start board-gray__start--" + theme}></div>
                            <div className={classNames("dashboard__caption board", { "board-gray": theme === "light"}, { "board-dark": theme === "dark"})}>
                                <h3>DOWNLOAD</h3>
                                <p>Latest stable</p>
                            </div>
                            <div className={classNames("dashboard__repositiry board", { "board-gray": theme === "light"}, { "board-dark": theme === "dark"})}>Loading failed</div>
                            <div className={classNames("dashboard__repositiry board", { "board-red": theme === "light"}, { "board-dark": theme === "dark"})}>15 KB</div>
                            <div className={classNames("dashboard__repositiry board", { "board-red": theme === "light"}, { "board-dark": theme === "dark"})}>52 KB</div>
                            <div className={classNames("dashboard__repositiry board", { "board-red": theme === "light"}, { "board-dark": theme === "dark"})}>1397</div>
                            <div className={"board-red__end board-red__end--" + theme}></div>
                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
