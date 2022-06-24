import FavButton from '../../src/scripts/utils/fav-button';
import FavButtonIdb from '../../src/scripts/data/cafe-fav';

const createLikeButtonPresenterWithResto = async (resto) => {
    await FavButton.init({
    favButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavButtonIdb,resto,
    });
};
export {createLikeButtonPresenterWithResto};
