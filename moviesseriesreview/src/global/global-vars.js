import { BaseAddr } from '../configs/config';

const URLS = {
    login_url       : BaseAddr + '/login/', // only post is available
    signup_url      : BaseAddr + '/user/profile/', // post for create new user, put and patch for update, delete for delete
    media_url       : BaseAddr + '/media/', // only to get media, usually /image/name
    testimonial_url : BaseAddr + '/testimonial/', // can have all methods, /<pk> to get specific
    critic_url      : BaseAddr + '/critic/', // can have all methods, /<pk> to get specific
    movie_utl       : BaseAddr + '/movie/', // only get is available
    contacus_url    : BaseAddr + '/contactus/',
    comment_url     : BaseAddr + '/comment/', // for commenting on critics
    image_url       : BaseAddr + '/image/', // to create image for static serving we use /media/image/
    
}


export {
    URLS,
}