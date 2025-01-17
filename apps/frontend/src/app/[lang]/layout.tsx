import type { Metadata, ResolvingMetadata } from 'next/types'
import { slugToLocale, getFallbackLocale } from '@/lib/i18n'
import deepmerge from 'deepmerge'

import Header from '@components/layout/header'
import Footer from '@components/layout/footer'

export type RootLayoutProps = {
    children: React.ReactNode,
    params?: {
        lang?: string
    }
}

/**
 * Make sure that the locale - which is now known at this level - will be added
 * to the metadata of the page
 * 
 * @param       props   The layout properties
 * @returns     The metadata that must be merged into the defaults
 */
export async function generateMetadata(props: RootLayoutProps, resolving: ResolvingMetadata) : Promise<Metadata> {
    const locale = slugToLocale(props.params?.lang ?? '', getFallbackLocale())
    const base = ((await resolving) ?? {}) as Metadata
    const newMeta : Metadata = {
        openGraph: {
            ...base?.openGraph,
            locale
        }
    }
    return newMeta
}

export default function RootLayout({ children, params }: RootLayoutProps) {
    const currentLocale = slugToLocale(params?.lang ?? '', getFallbackLocale())
    return <>
        <Header locale={ currentLocale } />
        <main>
            { children }
        </main>
        <Footer locale={ currentLocale } />
    </>
}
