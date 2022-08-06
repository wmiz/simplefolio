import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import simpleParallax from "simple-parallax-js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
