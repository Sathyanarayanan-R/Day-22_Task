import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavPage from './NavPage';
import HeaderPage from './HeaderPage';
import HomePage from './HomePage';
import ButtonsPage from './ButtonsPage';
import CardsPage from './CardsPage';
import ColorsPage from './ColorsPage';
import BordersPage from './BordersPage';
import AnimationsPage from './AnimationsPage';
import OtherPage from './OtherPage';
import Four04Page from './Four04Page';
import BlankPage from './BlankPage';
import ChartsPage from './ChartsPage';
import TablesPage from './TablesPage';
import ScrollToTopPage from './ScrollToTop';
import FooterPage from './FooterPage';

function MainPage({ conditionalRender }) {

    const homeData = {
        cardsName: ['Earnings (Monthly)', 'Earnings (Annual)', 'TASKS', 'Pending Requests'],
        colors: ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'light', 'dark'],
        cardValue: ['$40,000', '$215,000', '50%', '18'],
        iconNames: ['calendar', 'dollar-sign', 'clipboard-list', 'comments'],
        projectNames: ['Server Migration', 'Sales Tracking', 'Customer Database', 'Payout Details', 'Account Setup'],
        projectPercent: [20, 40, 60, 80, 100],
        progressColor: ['bg-danger', 'bg-warning', '', 'bg-info', 'bg-success'],
        hexColorCodes: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796', '#f8f9fc', '#5a5c69']
    }

    const buttonsData = {
        circleBtnSizes : ['', 'btn-sm', 'btn-lg'],
        btnsIcons : ['facebook-f', 'check', 'info-circle', 'exclamation-triangle', 'trash'],
        splitBtnIcons : ['flag', 'check', 'info-circle', 'exclamation-triangle', 'trash', 'arrow-right', 'arrow-right']
    }

    const colorsData = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    return (
        <>
            <div id="wrapper">
                {conditionalRender(NavPage)}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        {conditionalRender(HeaderPage)}
                        <Routes>
                            <Route exact path="/" element={<HomePage homeData={homeData} />} />
                            <Route exact path="/buttons" element={<ButtonsPage buttonsData={buttonsData} homeData={homeData} />} />
                            <Route exact path="/cards" element={<CardsPage homeData={homeData} />} />
                            <Route exact path="/colors" element={<ColorsPage grayColorCodes={colorsData} homeData={homeData} />} />
                            <Route exact path="/borders" element={<BordersPage homeData={homeData} />} />
                            <Route exact path="/animations" element={<AnimationsPage />} />
                            <Route exact path="/other" element={<OtherPage />} />
                            <Route exact path="/404page" element={<Four04Page />} />
                            <Route exact path="/blankpage" element={<BlankPage />} />
                            <Route exact path="/charts" element={<ChartsPage />} />
                            <Route exact path="/tables" element={<TablesPage />} />
                        </Routes>
                    </div>
                    {conditionalRender(FooterPage)}
                </div>
            </div>
            {conditionalRender(ScrollToTopPage)}
        </>
    );
}

export default MainPage;
