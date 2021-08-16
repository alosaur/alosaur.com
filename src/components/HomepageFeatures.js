import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <h3>
            <Translate
            id="homepage.titleFeatures">
            Features
            </Translate>
          </h3>
          <ul>
          

            <li> <b>Area</b>
              <Translate id="homepage.futures.Area"> - these are the modules of your application. </Translate>
             </li> 
            <li> <b>Controller</b>
              <Translate id="homepage.futures.Controller">  - are responsible for controlling the flow of the application execution </Translate>
            </li> 
            <li> <b>Hooks</b> 
            <Translate id="homepage.futures.Hooks"> - middleware for area, controller and actions with support DI. Have 3 life cyclic functions:</Translate>
              <code>onPreAction, onPostAction, onCatchAction</code>
            </li>
            <li> <b>Decorators</b>
            <Translate id="homepage.futures.Decorators"> - for query, cookie, parametrs, routes and etc. </Translate>
             </li> 
            <li> <b>Dependency Injection</b>
            <Translate id="homepage.futures.DI"> - for all controllers and hooks by default from microsoft/TSyringe </Translate>
             </li> 
            <li>
            <Translate id="homepage.futures.Other">
              Render pages any template render engine.
              </Translate>
            </li> 
          </ul>
        </div>
      </div>
    </section>
  );
}
