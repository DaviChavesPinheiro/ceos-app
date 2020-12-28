import React from 'react'
import Image from 'next/image'

import {ContainerFull} from './styles'

const FullImage = ({imageURL}) => {
    return (
        <ContainerFull>
            <Image src={imageURL} layout="fill"></Image>
        </ContainerFull>        
    )
}

export default FullImage
