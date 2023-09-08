import React from 'react';

import {BaseText, BaseView, WebRTCPOC} from '@components';

export const BirdseyeScreen = () => {
  return (
    <BaseView isScrollview className="pb-4">
      <BaseText className="text-3xl mb-4 self-center">Birdseye</BaseText>

      <BaseView className="flex-1">
        <WebRTCPOC cameraName="birdseye" />
      </BaseView>
    </BaseView>
  );
};
