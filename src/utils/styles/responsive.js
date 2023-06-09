import { Dimensions, PixelRatio } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

let baseWidth = 414;
let baseHeight = 896;

const widthToDp = (widthPercentage) => {
  const widthValue =
    typeof widthPercentage == 'number'
      ? widthPercentage
      : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel(
    (width * ((100 * widthValue) / baseWidth)) / 100,
  );
};

const heightToDp = (heightPercentage) => {
  const heightValue =
    typeof heightPercentage == 'number'
      ? heightPercentage
      : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel(
    (height * ((100 * heightValue) / baseHeight)) / 100,
  );
};

const addOreintationListener = () => {
  Dimensions.addEventListener('change', (newDimension) => {
    width = newDimension.window.width;
    height = newDimension.window.height;
    if (width < height) {
      baseWidth = 375;
      baseHeight = 667;
    } else {
      baseWidth = 667;
      baseHeight = 375;
    }
  });
};

const removeOreintationListener = () => {
  Dimensions.removeEventListener('change', () => { });
};

export {
  width as deviceWidth,
  height as deviceHeight,
  widthToDp as wp,
  heightToDp as hp,
  addOreintationListener,
  removeOreintationListener,
};
