import { Easing } from "framer-motion";

export interface IFramerConfig {
  verticaleTranslate: {
    initial: {
      y: number;
      opacity: number;
    };
    animate: {
      y: number;
      opacity: number;
    };
  };
  animationEasing: {
    easeOut: Easing;
  };
}