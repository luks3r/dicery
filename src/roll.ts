import { Random, nativeMath } from "random-js";

export const die = (sides: number, random?: Random): number => {
  random ??= new Random(nativeMath);
  return random.die(sides);
}

export const dice = (sides: number, amount: number, random?: Random): number[] => {
  random ??= new Random(nativeMath);
  return random.dice(sides, amount);
}