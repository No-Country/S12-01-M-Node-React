import React from 'react'

type Props = {
    fill?: string; 
    width?: string;
    className?: string;
}

const BackArrow = (props: Props) => {

    const { fill = "black", width = "24", className, ...rest } = props;
  return (
    <svg width={width} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg  "  className={` ${className}`}  {...rest} >
    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill={fill}/>
    </svg>
    
  )
}

export default BackArrow