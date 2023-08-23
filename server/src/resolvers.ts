import { Resolvers } from 'resolvers-types.generated';
import Query from './resolvers/Query';
import Db, { DbTweet, DbUser } from './db';

export interface TwitterResolverContext {
    db: Db,
    dbTweetCache: Record<string, DbTweet>,
    dbUserCache: Record<string, DbUser>
    dbTweetToFavoriteCountMap: Record<string, number>,
  }
const resolvers: Resolvers<TwitterResolverContext> =  {
    Query,
  }

export default resolvers;
