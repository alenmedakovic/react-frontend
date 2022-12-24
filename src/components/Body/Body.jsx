import React from 'react';
import "./body.css";

function Body() {
  return (
    <section>
        <h2>Sign up for our email newsletter!</h2>
        <form>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <input type="submit" value="Sign up for our newsletter" />
        </form>
        <p>Stay up to date with the latest news and offers from our company</p>
    </section>
  );
}

export default Body;
