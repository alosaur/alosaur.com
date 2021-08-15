import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <h3>Features</h3>
          <ul>
            <li> <b>Area</b> - these are the modules of your application.</li> 
            <li> <b>Controller</b> - are responsible for controlling the flow of the application execution </li> 
            <li> <b>Hooks</b>  - middleware for area, controller and actions with support DI. Have 3 life cyclic functions: <code>onPreAction, onPostAction, onCatchAction</code> </li>
            <li> <b>Decorators</b> - for query, cookie, parametrs, routes and etc. </li> 
            <li> <b>Dependency Injection</b> - for all controllers and hooks by default from microsoft/TSyringe (more about alosaur injection). </li> 
            <li>  Render pages any template render engine. (more)</li> 
          </ul>
        </div>
      </div>
    </section>
  );
}
