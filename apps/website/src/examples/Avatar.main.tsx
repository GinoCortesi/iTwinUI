/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Avatar, getUserColor } from '@itwin/itwinui-react';
import { SvgUser } from '@itwin/itwinui-icons-react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--iui-size-s)',
        placeItems: 'center',
      }}
    >
      <Avatar
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        size='x-large'
        status='online'
      />
      <Avatar
        abbreviation='US'
        backgroundColor={getUserColor('Unknown user')}
        image={<SvgUser className='iui-icon' aria-hidden='true' />}
        title='Unknown user'
        size='x-large'
        status='away'
      />
      <Avatar
        abbreviation='GB'
        backgroundColor={getUserColor('Greg Bentley')}
        image={
          <img src='https://www.bentley.com/wp-content/uploads/greg-bentley-hr-profile.jpeg' />
        }
        title='Greg Bentley'
        size='x-large'
        status='busy'
      />
    </div>
  );
};
