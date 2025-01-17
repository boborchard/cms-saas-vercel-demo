import React, { type ComponentProps, type FunctionComponent } from 'react'
import Link from 'next/link'

export const LinkButton : FunctionComponent<ComponentProps<typeof Link>> = (props) =>
{
    const linkProps = { ...props }
    const children = linkProps.children
    const className = linkProps.className
    delete linkProps.children
    delete linkProps.className

    return <Link {...linkProps} className={ `inline-block font-semibold bg-teal-800 hover:bg-teal-200 text-slate-100 hover:text-slate-800 rounded-lg py-2 px-6 shadow hover:shadow-lg transition duration-500 ease-in-out ${ className ?? ''}`.trim() }>{ children }</Link>
}

export default LinkButton