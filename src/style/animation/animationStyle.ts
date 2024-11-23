import { AnimationToken } from "./enum";

export const animationStyle = `
  @keyframes ${AnimationToken.FadeIn} {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ${AnimationToken.FadeOut}  {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  .rrh-enter {
    animation: ${AnimationToken.FadeIn} 300ms ease-in-out;
  }

  .rrh-leave {
    animation: ${AnimationToken.FadeOut} 300ms ease-in-out;
  }
`;
