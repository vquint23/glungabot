export default getModifierFlags;
/**
 * Return the flags for the given list of modifiers
 *
 * @param {...Modifier|string} modifiers
 *
 * @returns {string}
 */
declare function getModifierFlags(...modifiers: (Modifier | string)[]): string;
import Modifier from "./Modifier.js";
