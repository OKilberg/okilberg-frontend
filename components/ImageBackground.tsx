import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useObjectFit } from './imageUtils';

type Props = {
    imageUrl: string,
    children: ReactNode | ReactNode[],
    objectFit?: string,
    className?: string,
    imageClassName?: string 
}

const ImageBackground = ({ imageUrl, children, objectFit, className, imageClassName }: Props) => {
  return (
    <div className={"relative w-full h-full "+className}>
      <Image
        src={imageUrl}
        layout='fill'
        objectFit={useObjectFit(objectFit)}
        objectPosition='center'
        alt='Background image'
        className={"absolute z-0 "+imageClassName}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {children}
      </div>
    </div>
  );
};

export default ImageBackground;

