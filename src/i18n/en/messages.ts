export const en = {
    global: {
        networkLost: 'network lost',
        rightsReserved: 'all rights reserved',
        next: 'next',
        done: 'done',
        create: 'create',
        edit: 'edit',
        follow: 'follow',
        invite: 'invite',
        info: 'info',
        open: 'open',
        error: {
            item: 'error | errors',
            count: 'no error | error | errors'
        },
        warning: 'warning',
        more: 'more'
    },
    activity: {
        item: 'activity | activities',
        count: 'no activity | activity | activities',

        myProfile: 'my profile',
        newActivity: 'new activity',
        seeAll: 'see all',
        friendsOffline: 'friends offline',
        seePeople: 'see all'
    },
    auth: {
        signIn: 'sign in',
        signUp: 'sign up',
        messages: {
            verifyAccount: 'an account verification link has been sent to your email address',
            loginNotMatch: 'login and password do not match',
            remindPassword: 'remind password'
        },
    },

    category: {
        item: 'category | categories',
        count: 'no category | category | categories'
    },
    event: {
        item: 'event | events',
        count: 'no event | event | events',
        author: {
            item: 'author | authors',
            count: 'no author | author | authors'
        },
        lineUp: 'line up',
        price: 'price',
        terms: 'terms',
        people: 'people',
        status: {
            active: 'now active',
            wait: 'starting soon',
            end: 'ended today'
        },
        messages: {
            category: 'this is <span class="text-info">{category}</span>',
            time: 'the next stage will start at <span class="text-info">{time}</span>',
            address: 'address: <span class="text-info">{address}</span>',
            experience: 'you can get new experience',
            countMax: 'no restrictions on the number of members | no more than {count} person',
            ageMax: 'no age limit for members | over {age} years old'
        }
    },
    experience: {
        item: 'experience record | experience records',
        count: 'no experience records | experience record | experience records'
    },
    filter: {
        item: 'filter | filters',
        count: 'no filter | filter | filters',
        search: 'search',
        searchType: 'search type',
        moreFilters: 'more filters'
    },
    interest: {
        item: 'interest | interests',
        count: 'no interest | interest | interests'
    },
    notify: {
        section: 'notify',
        item: 'notification | notifications',
        count: 'no notification | notification | notifications'
    },
    relations: {
        follower: {
            item: 'follower | followers',
            count: 'no follower | follower | followers'
        },
        member: {
            /* TODO: Rename (?) */
            item: 'member | members',
            count: 'no member | member | members'
        },
        invited: {
            /* TODO: Rename (?) */
            item: 'invited | invited',
            count: 'no invited | invited | invitees'
        },
        creator: {
            item: 'creator | creators',
            count: 'no creator | creator | creators'
        },
        following: {
            /* TODO: Rename (?) */
            item: 'following | following',
            count: 'no following | following | following'
        },
        friend: {
            item: 'friend | friends',
            count: 'no friend | friend | friends',
        }
    },
    story: {
        item: 'story | stories',
        count: 'no story | story | stories'
    },
    user: {
        item: 'user | users',
        count: 'no user | user | users',
        name: {
            item: 'name | names',
            count: 'no name | name | names'
        },
        birthday: 'birthday | birthdays',
        appName: 'nickname',
        email: 'email',
        password: 'password | passwords',
    }
}

export default en
