import { BaseAddr } from '../configs/config';

const URLS = {
    login_url                   : BaseAddr + '/login/', // only post is available
    signup_url                  : BaseAddr + '/user/profile/', // post for create new user, put and patch for update, delete for delete
    media_url                   : BaseAddr + '/media/', // only to get media, usually /image/name
    testimonial_url             : BaseAddr + '/testimonial/', // can have all methods, /<pk> to get specific
    critic_url                  : BaseAddr + '/critic/', // can have all methods, /<pk> to get specific
    movie_url                   : BaseAddr + '/movie/retrieve/', // only get is available
    contacus_url                : BaseAddr + '/contactus/',
    user_url                    : BaseAddr + '/user/profile/',
    user_email_url              : BaseAddr + '/user/email/',
    comment_url                 : BaseAddr + '/comment/', // for commenting on critics
    image_url                   : BaseAddr + '/image/', // to create image for static serving we use /media/image/
    comment_of_critics_url      : BaseAddr + '/comment/critic/', // for commenting on critics
    
}


export {
    URLS,
}