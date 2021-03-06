// @flow
import * as React from 'react';
import classNames from 'classnames';

import AccessibleSVG from '../accessible-svg';
import { bdlGray50 } from '../../styles/variables';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconCollectionsStar = ({ className = '', color = bdlGray50, height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={classNames('bdl-IconCollectionsStar', className)}
        height={height}
        title={title}
        viewBox="0 0 32 32"
        width={width}
    >
        <path
            className="fill-color"
            d="M7.896 0h21.642A2.462 2.462 0 0 1 32 2.462v21.642a2.462 2.462 0 0 1-2.462 2.462H7.896a2.462 2.462 0 0 1-2.462-2.462V2.462A2.462 2.462 0 0 1 7.896 0zm.615 23.49h20.412V3.076H8.511v20.412zm6.646-2.932c-.691.378-1.486-.258-1.35-1.081l.672-4.07-2.852-2.888c-.575-.583-.268-1.625.513-1.743l3.97-.6 1.769-3.724c.349-.736 1.323-.736 1.672 0l1.77 3.725 3.969.6c.781.117 1.088 1.159.513 1.742l-2.852 2.888.672 4.07c.136.823-.659 1.46-1.35 1.081l-3.558-1.944-3.558 1.944zM1.51 13.283c.834 0 1.51.676 1.51 1.51V26.52a2.462 2.462 0 0 0 2.46 2.46h11.728a1.51 1.51 0 0 1 0 3.019H4.923A4.923 4.923 0 0 1 0 27.077V14.792a1.51 1.51 0 0 1 1.51-1.509z"
            fill={color}
            fillRule="nonzero"
        />
    </AccessibleSVG>
);

export default IconCollectionsStar;
