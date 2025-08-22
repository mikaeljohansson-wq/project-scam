import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css';

interface AnimatedTransitionProps {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ in: inProp, timeout, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={timeout}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default AnimatedTransition;