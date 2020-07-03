import React, { useState } from 'react';
import styled from 'styled-components';

interface IAvatarProps {
  user: {
    avatar: string;
    handle: string;
  }
}

const UserAvatar = ({ user }: IAvatarProps) => {
  const [isHovered, setHover] = useState<boolean>(false);

  return (
    <AvatarContainer> 
      <Avatar 
        data-testid="user-avatar"
        alt={`${user.handle}'s profile picture`}
        src={user.avatar}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        hover={isHovered}
      />
    </AvatarContainer>
  )
};

const AvatarContainer = styled.div`
  max-width: 100px;
`;

const Avatar = styled.img<{ hover: boolean}>`
  width: 50px;
  border-radius: 50%;
  opacity: ${props => props.hover ? 0.8 : 1 }
`;

export default UserAvatar;