
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-GJ9YJMSHF0"); // replace with your actual Measurement ID
};

export const trackPageview = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
