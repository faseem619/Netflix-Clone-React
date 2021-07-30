import React from "react";
import Form from "./Components/Form";
import "./Signin.css";
export default function Signin() {
  return (
    <div className="signin">
      <main>
        <header className="signin_header">
          <img
            className="logo_sign"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </header>
        <Form />
      </main>
      <footer>
        <div className="footer_class">
          <h4>Questions? Call 000-800-040-1843 </h4>
          <ul>
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
          <div class="select-arrow medium prefix globe">
            <select
              data-uia="language-picker"
              class="ui-select medium"
              id="lang-switcher-select"
              tabindex="0"
              placeholder="lang-switcher"
            >
              <option
                selected=""
                value="/?locale=en-IN"
                data-language="en"
                data-country="IN"
                lang="en"
              >
                English
              </option>
              <option
                value="/?locale=hi-IN"
                data-language="hi"
                data-country="IN"
                lang="hi"
              >
                हिन्दी
              </option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}
