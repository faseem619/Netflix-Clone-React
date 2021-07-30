import React from "react";

export default function Form() {
  return (
    <div className="form_big">
      <div className="form_container">
        <form>
          <h1 className="form_heading"> Sign in</h1>
          <label htmlFor="">
            <input
              className="input_area"
              placeholder="Email or phone number"
              type="email"
            />
          </label>
          <label
            htmlFor="
        "
          >
            <input
              className="input_area"
              placeholder="Password"
              type="password"
            />
          </label>

          <button type="submit">Sign In</button>
          <div className="form_end">
            <div>Remember me?</div>
            <div>Need more?</div>
          </div>
        </form>
      </div>
    </div>
  );
}
