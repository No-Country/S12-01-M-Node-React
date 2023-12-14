import React from 'react'

type Props = {
    fill?: string; 
    width?: string;
    height?: string;
    className?: string;
}

const FowardArrow = (props: Props) => {

    const { fill = "black", width = "24",  height="16", className, ...rest } = props;
  return (
<svg width={width} height={height} viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${className}`}  {...rest}>
<path d="M48 0L46.59 1.41L52.17 7H0V9H52.17L46.59 14.59L48 16L56 8L48 0Z" fill={fill}/>
</svg>

    
  )
}

export default FowardArrow