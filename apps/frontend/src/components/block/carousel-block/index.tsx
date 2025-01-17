import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import { CmsComponent } from '@remkoj/optimizely-dxp-react'
import { processContentAreaItems } from '@remkoj/optimizely-dxp-react-server'
import 'server-only'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('./client'), { ssr: true })

export const CarouselBlock : CmsComponent<GraphQL.CarouselBlockDataFragment> = async ({ data, inEditMode, client, contentLink }) =>
{
    const delay = 10
    const slides = await processContentAreaItems(data.slides, contentLink.locale, inEditMode, client)

    return <div className='carousel-block relative w-full'>
        { slides.length > 0 && <Carousel slides={ slides } durationMilliseconds={ delay*1000 } showArrows showDots /> }
    </div>
}
CarouselBlock.displayName = "Carousel"
export default CarouselBlock

export const CarouselBlockData = gql(/*GraphQL*/`fragment CarouselBlockData on CarouselBlock {
    slides: CarouselSlides {
        item: ContentLink { 
            id: Id 
            workId: WorkId 
            guidValue: GuidValue 
            data: Expanded { 
                ...IContentData 
            } 
        } 
        displayOption: DisplayOption
    }
    arrows:ShowArrows
}`)