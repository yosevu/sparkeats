export {};

declare global {
  interface Window {
    __SPARKEATS_VERSION__: string;
  }

  type WindowLocation = Location;
}
