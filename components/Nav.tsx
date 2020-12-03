import * as React from 'react';
import {useRouter} from 'next/router';
import {Nav, INavLink, INavStyles, INavLinkGroup} from '@fluentui/react';
import {useState} from 'react';

const menuLinks = [
  {
    name: '',
    icon: 'CollapseMenu',
    url: '',
    key: 'key0',
    isExpanded: true,
    target: '',
  },
  {
    name: 'Home',
    key: 'key1',
    url: '',
    expandAriaLabel: 'Expand Home section',
    collapseAriaLabel: 'Collapse Home section',
    links: [
      {
        name: 'Activity',
        url: 'http://msn.com',
        key: 'key10',
        target: '_blank',
      },
      {
        name: 'MSN',
        url: 'http://msn.com',
        disabled: true,
        key: 'key20',
        target: '_blank',
      },
    ],
    isExpanded: false,
  },
  {
    name: 'About',
    icon: 'Contact',
    url: '',
    key: 'key2',
    isExpanded: true,
    target: '',
  },
  {
    name: 'Pages',
    icon: 'PageLink',
    url: '',
    key: 'key3',
    target: '',
  },
  {
    name: 'Notebook',
    icon: 'DietPlanNotebook',
    url: '',
    key: 'key4',
    disabled: true,
  },
  {
    name: 'Communication and Media',
    icon: 'ActivityFeed',
    url: '',
    key: 'key5',
    target: '',
  },
  {
    name: 'News',
    url: '',
    icon: 'News',
    key: 'key6',
    target: '',
  },
];

export const NavBasic: React.FunctionComponent = () => {
  const [isNarrow, setNarrow] = useState(true);
  const router = useRouter();
  const navStyles: Partial<INavStyles> = {
    root: {
      paddingTop: 20,
      width: isNarrow ? 47 : 250,
      boxSizing: 'border-box',
      overflowY: 'auto',
    },
    link: {
      paddingLeft: isNarrow ? 9 : undefined,
    },
  };
  const navLinkGroups: INavLinkGroup[] = [
    {
      // onHeaderClick: () => console.log('clicked'),
      // collapseByDefault: true,
      links: isNarrow ? [...menuLinks.filter((link) => !link.links)] : menuLinks,
    },
  ];
  function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item?.name === '') {
      setNarrow(!isNarrow);
    } else if (item?.name) {
      void router.push(`/${item?.name.toLowerCase()}`);
    } else {
      void router.push('/');
    }
  }
  return (
    <Nav onLinkClick={_onLinkClick} selectedKey="" ariaLabel="Nav basic" groups={navLinkGroups} styles={navStyles} />
  );
};
