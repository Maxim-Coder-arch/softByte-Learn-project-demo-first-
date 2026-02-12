const framerConfig = {
  verticaleTranslate: {
    initial: {
      y: 30,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  },
  animationEasing: {
    easeOut: "easeOut"
  } as const
}

export default framerConfig;


