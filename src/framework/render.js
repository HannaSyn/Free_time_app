/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

let Component, Target;

/**
 * Renders a component and attaches it to the target DOM element
 * @param componentFunction - Component function or class
 * @param target - DOM element to attach component to
 */

function renderApp(componentFunction = null, target = null) {
  if (componentFunction) Component = componentFunction;
  if (target) Target = target;
  Target.innerHTML = '';
  Target.appendChild(<Component />);
}

export default renderApp;
