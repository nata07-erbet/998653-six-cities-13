import type { AnchorHTMLAtttibutes } from 'react'; //хз

import { Link as RouterLink } from 'react-router-dom';

type LinkProps = Pick<
	AnchorHTMLAtttibutes<HTMLAnchorElement>,
	'children' | 'className'
> & {
	href: string;
};

export function Link({children, href, ...props}:LinkProps) {
	const isExternal = href.startsWith('http://');
	const isAncor = href.startsWith('#');
	if(isExternal){
		return (
			<a href={href} rel ="noopener noreferrer" target="_blank" {...props}>
				{children}
			</a>
		);
	}

	if(isAncor) {
		return (
			<a href = {href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<RouterLink to={href} {...props}></RouterLink>
	);
}


