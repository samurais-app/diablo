import { IOutlineItemProps } from '@ui/interfaces';
import { ReactElement, createContext } from 'react';

export const OutlineContext = createContext({

});

type OutlineProviderProps = {
  children?: ReactElement<IOutlineItemProps> | ReactElement<IOutlineItemProps>[];
}

export function OutlineProvider({ children }: OutlineProviderProps) {

  // useLayoutEffect(() => { return () => { }; }, []);

  return (
    <OutlineContext.Provider value={{}}>
      {children}
    </OutlineContext.Provider>
  );
}