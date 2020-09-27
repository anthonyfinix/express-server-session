const {updateYoutubeIDs} = require('./util/youtube/index');
module.exports = async (source='') => {
    switch(source){
        case 'youtube':
            return await updateYoutubeIDs()
        default:
            return 'test';
    }
};
