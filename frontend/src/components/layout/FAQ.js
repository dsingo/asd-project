import React from 'react';
import "./FAQ.scss";

export default () => (
    <div className="faq">
        <h1 className="faq-heading">Frequently Asked Questions </h1>
        <ul className="rect2">
            <li className="qs">How to use an Opal Card?
            <p>To add an opal card to your account, you first have to have an account. After this, navigate to your dashboard (top right hand corner) and click on add card. Fill in all the details and then press add card.</p>
            </li>
        </ul>

        <ul className="rect2">
            <li className="qs">How do I register?
            <p>To get an opal card you must have an account. To create an account, press the Login/Register button in the navigation bar and fill in your details. You will then be redirected to your dashboard where you can alter account details and view your opal cards.</p>
            </li>
        </ul>

        <ul className="rect2">
            <li className="qs">How do I top up my Opal Card?
            <p>To top up your opal card, you must have an account. After you have logged in, navigate to your dashboard and click 'View Cards'. Click on the card you want to update, and then fill in the details to top up this card.</p>
            </li>
        </ul>
            
        <ul className="rect2">
            <li className="qs">How do I replace my Opal Card?
            <p>If you lose your opal card, you will have to add a new card. We will be able to transfer the money over, if there is any, to the new card.</p>
            </li>
        </ul>
    </div>
)