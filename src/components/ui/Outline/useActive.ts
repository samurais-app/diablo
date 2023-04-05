import { useLayoutEffect } from 'react';


export function useActive(id: string) {
  const _id = id.replace('#', '');
  useLayoutEffect(() => {
    console.log(document.getElementById(_id).getBoundingClientRect());
  }, []);
}