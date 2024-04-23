// declare var ga: (
//   eventName: string,
//   options: {
//     hitType: string;
//     eventCategory?: string;
//   }
// ) => void;

interface Window {
  ga: (
    eventName: string,
    options: {
      hitType: string;
      eventCategory?: string;
    }
  ) => void;
}
