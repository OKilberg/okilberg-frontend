import React, { ReactNode } from 'react';
import Image from 'next/image';
import { ObjectFit, useObjectFit } from './utils/imageUtils';

type Props = {
  imageUrl: string,
  children: ReactNode | ReactNode[],
  objectFit?: ObjectFit,
  className?: string,
  imageClassName?: string
  containerClassName?: string,
  priority?: boolean
}

const ImageBackground = ({ imageUrl, children, objectFit, className, imageClassName, containerClassName, priority }: Props) => {
  return (
    <div className={"relative w-full h-full " + className}>
      <Image
        src={imageUrl}
        fill
        priority={priority}
        style={{ objectFit: useObjectFit(objectFit), objectPosition: 'center' }}
        alt='Background image'
        className={"absolute z-0 " + imageClassName}
      />
      <div className={"absolute top-0 left-0 w-full h-full z-10 " + containerClassName}>
        {children}
      </div>
    </div>
  );
};

export default ImageBackground;

