import { NavLink } from "react-router-dom";
import { profile } from "../data/content.js";

// Stacked in the left column on the home page, centered in a row elsewhere.
export default function Nav({ vertical }) {
  return (
    <nav className={vertical ? "nav nav--vertical" : "nav"}>
      <NavLink to="/" end>{profile.name}</NavLink>
      <NavLink to="/projects">Selected projects</NavLink>
      <NavLink to="/services">Services</NavLink>
    </nav>
  );
}
