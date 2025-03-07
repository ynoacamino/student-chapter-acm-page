import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToRoute(route: string) {
  return route.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replaceAll(' ', '-');
}
